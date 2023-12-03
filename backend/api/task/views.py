from itertools import groupby

from django.contrib.auth.decorators import login_required
from django.db.models import Max
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView

from api.project.views import BaseListView
from api.project.models import Project
from api.workspace.models import Workspace

from api.workspace.models import Workspace
from rest_framework import viewsets

import ujson

from .forms import SectionFilterForm, SectionGroupByForm, TaskFilterForm
from .models import Section, Task, Todo
from .serializers import SectionSerializer, TaskSerializer, TodoSerializer
from .tasks import (duplicate_sections, duplicate_tasks, section_set_section_leader,
                    section_set_state, remove_sections, remove_tasks, reset_section,
                    task_set_assignee, task_set_state, task_set_project,
                    task_set_section, handle_task_change, handle_section_change)
from ..utils import get_clean_next_url


@method_decorator(login_required, name='dispatch')
class SectionDetailView(DetailView):

    model = Section

    def get_children(self):
        queryset = self.get_object().task_set.select_related('assignor', 'assignee', 'project')

        config = dict(
            project=('project__starts_at', lambda task: task.project and task.project.title or 'No project'),
            assignor=('assignor__id', lambda task: task.assignor and task.assignor.username or 'Unset'),
            assignee=('assignee__id', lambda task: task.assignee and task.assignee.username or 'Unassigned'),
        )

        group_by = self.request.GET.get('group_by')

        try:
            order_by, fx = config[group_by]
        except KeyError:
            return [(None, queryset)]
        else:
            queryset = queryset.order_by(order_by)
            foo = [(t[0], list(t[1])) for t in groupby(queryset, key=fx)]
            return foo

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['objects_by_group'] = self.get_children()
        context['group_by_form'] = SectionGroupByForm(self.request.GET)
        context['group_by'] = self.request.GET.get('group_by')
        context['filters_form'] = TaskFilterForm(self.request.POST)
        context['current_workspace'] = self.kwargs['workspace']
        return context

    def post(self, *args, **kwargs):
        params = ujson.loads(self.request.body)

        if params.get('remove') == 'yes':
            remove_sections.delay([self.get_object().id])

            url = reverse_lazy('tasks:section-list', args=[self.kwargs['workspace']])

            if self.request.headers.get('X-Fetch') == 'true':
                return JsonResponse(dict(url=url))
            else:
                return HttpResponseRedirect(url)

        if params.get('section-reset') == 'yes':
            task_ids = [t[6:] for t in params.keys() if 'task-' in t]
            reset_section.delay(task_ids)

        state = params.get('state')
        if isinstance(state, list):
            state = state[0]
        if state:
            task_ids = [t[6:] for t in params.keys() if 'task-' in t]
            task_set_state.delay(task_ids, state)

        assignee = params.get('assignee')
        if isinstance(assignee, list):
            assignee = assignee[0]
        if assignee:
            task_ids = [t[6:] for t in params.keys() if 'task-' in t]
            task_set_assignee.delay(task_ids, assignee)

        url = self.request.get_full_path()

        if self.request.headers.get('X-Fetch') == 'true':
            return JsonResponse(dict(url=url))
        else:
            return HttpResponseRedirect(url)


@method_decorator(login_required, name='dispatch')
class SectionViewSet(viewsets.ModelViewSet):
    serializer_class = SectionSerializer
    queryset = Section.objects.select_related('state', 'state', 'section_leader')


@method_decorator(login_required, name='dispatch')
class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.select_related('section', 'project', 'state', 'assignor', 'assignee')


@method_decorator(login_required, name='dispatch')
class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


class TaskBaseView(object):
    model = Task
    fields = [
        'title', 'description',
        'section', 'project',
        'assignor', 'assignee',
        'priority','weight', 'points',
        'state', 'tags',
    ]

    @property
    def success_url(self):
        return get_clean_next_url(self.request, reverse_lazy('tasks:task-list', args=[self.kwargs['workspace']]))

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        task_add_url = reverse_lazy('tasks:task-add', args=[self.kwargs['workspace']])

        section_id = self.request.GET.get('section')
        project_id = self.request.GET.get('project')
        if section_id or project_id:
            task_add_url += '?'
            if section_id:
                task_add_url += 'section=' + section_id
            if project_id:
                task_add_url += 'project=' + project_id

        context['task_add_url'] = task_add_url
        context['current_workspace'] = self.kwargs['workspace']

        return context


@method_decorator(login_required, name='dispatch')
class TaskCreateView(TaskBaseView, CreateView):
    model = Task
    fields = [
        'title', 'description',
        'assignee',
        'priority','weight', 'points',
        'state', 'tags',
    ]
    def get_initial(self):
        initial_dict = dict( state='pl')

        section_id = self.request.GET.get('section')
        if section_id is not None:
            initial_dict['section'] = section_id

            max_priority = Task.objects.filter(section=section_id)\
                .aggregate(Max('priority'))['priority__max'] or 0
            initial_dict['priority'] = max_priority + 1

        project_id = self.request.GET.get('project')
        if project_id is not None:
            initial_dict['project'] = project_id

        return initial_dict

    def post(self, *args, **kwargs):
        data = ujson.loads(self.request.body)
        form = self.get_form_class()(data)
        # form.instance.project = self.kwargs['project']
        # form.instance.section = self.kwargs['section']
        return self.form_valid(form)

    def form_valid(self, form):
        form.instance.workspace = Workspace.objects.get(pk=1)
        # form.instance.project = Project.objects.get(pk = int(self.request.GET.get('project')))
        section_id = self.request.GET.get('section')
        if section_id is not None:
            form.instance.section = Section.objects.get(pk= int(self.request.GET.get('section')))
            form.instance.project = form.instance.section.project
        project_id = self.request.GET.get('project')
        if project_id is not None:
            form.instance.project = Project.objects.get(pk = project_id)
        form.instance.assignor = self.request.user
        response = super().form_valid(form)

        url = self.get_success_url()

        if self.request.headers.get('X-Fetch') == 'true':
            return JsonResponse(dict(url=url))

        return response


@method_decorator(login_required, name='dispatch')
class TaskUpdateView(TaskBaseView, UpdateView):

    def post(self, *args, **kwargs):
        data = ujson.loads(self.request.body)

        if data.get('save-as-new'):
            form = self.get_form_class()(data)
        else:
            form = self.get_form_class()(data, instance=self.get_object())

        return self.form_valid(form)

    def form_valid(self, form):
        response = super().form_valid(form)

        url = self.get_success_url()

        if self.request.headers.get('X-Fetch') == 'true':
            return JsonResponse(dict(url=url))

        return response


class SectionBaseView(object):
    model = Section
    fields = [
        'title', 'description',
        'section_leader', 'priority','weight',
        'state', 'tags',
    ]

    @property
    def success_url(self):
        return get_clean_next_url(self.request, reverse_lazy('tasks:section-list', args=[self.kwargs['workspace']]))

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        section_add_url = reverse_lazy('tasks:section-add', args=[self.kwargs['workspace']])
        context['section_add_url'] = section_add_url
        context['current_workspace'] = self.kwargs['workspace']
        return context


@method_decorator(login_required, name='dispatch')
class SectionCreateView(SectionBaseView, CreateView):

    fields = [
        'title', 'description',
        'section_leader', 'priority','weight',
        'state', 'tags',
    ]
    def get_initial(self):
        return dict(section_leader=self.request.user.id, state='pl')

    def post(self, *args, **kwargs):
        data = ujson.loads(self.request.body)
        form = self.get_form_class()(data)
        
        return self.form_valid(form)

    def form_valid(self, form):
        form.instance.workspace = Workspace.objects.get(pk=1)
        form.instance.project = Project.objects.get(pk = int(self.request.GET.get('project')))
        response = super().form_valid(form)

        url = self.get_success_url()

        if self.request.headers.get('X-Fetch') == 'true':
            return JsonResponse(dict(url=url))

        return response


@method_decorator(login_required, name='dispatch')
class SectionUpdateView(SectionBaseView, UpdateView):

    def post(self, *args, **kwargs):
        data = ujson.loads(self.request.body)

        if data.get('save-as-new'):
            form = self.get_form_class()(data)
        else:
            form = self.get_form_class()(data, instance=self.get_object())

        return self.form_valid(form)

    def form_valid(self, form):
        response = super().form_valid(form)

        url = self.get_success_url()

        if self.request.headers.get('X-Fetch') == 'true':
            return JsonResponse(dict(url=url))

        return response


@method_decorator(login_required, name='dispatch')
class SectionList(BaseListView):
    model = Section

    filter_fields = dict(
        section_leader='section_leader__username',
        state='state__name__iexact',
        label='tags__name__iexact',
        project='project__title__iexact'
    )

    select_related = ['section_leader', 'state', 'project']
    prefetch_related = ['tags']

    def get_context_data(self, **kwargs):
        to_project = self.request.GET.get('to-project')
        
        context = super().get_context_data(**kwargs)
        context['filters_form'] = SectionFilterForm(self.request.POST)
        if to_project:
            try:
                project = Project.objects.get(pk=to_project)
            except Project.DoesNotExist:
                pass
            else:
                context['add_to'] = 'project'
                context['add_to_object'] = project
 
        context['current_workspace'] = self.kwargs['workspace']
        return context

    def post(self, *args, **kwargs):
        params = ujson.loads(self.request.body)

        section_ids = [t[5:] for t in params.keys() if 'section-' in t]

        if len(section_ids) > 0:
            if params.get('remove') == 'yes':
                remove_sections.delay(section_ids)

            if params.get('duplicate') == 'yes':
                duplicate_sections.delay(section_ids)

            state = params.get('state')
            if isinstance(state, list):
                state = state[0]
            if state:
                section_set_state.delay(section_ids, state)

            section_leader = params.get('section_leader')
            if isinstance(section_leader, list):
                section_leader = section_leader[0]
            if section_leader:
                section_set_section_leader.delay(section_ids, section_leader)

        url = self.request.get_full_path()

        if self.request.headers.get('X-Fetch') == 'true':
            return JsonResponse(dict(url=url))
        else:
            return HttpResponseRedirect(url)


@method_decorator(login_required, name='dispatch')
class TaskList(BaseListView):
    model = Task

    filter_fields = dict(
        assignor='assignor__username',
        assignee='assignee__username',
        state='state__name__iexact',
        label='tags__name__iexact',
        project='project__title__iexact'
    )

    select_related = ['assignor', 'assignee', 'state', 'project']
    prefetch_related = ['tags']

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['filters_form'] = TaskFilterForm(self.request.POST)

        to_project = self.request.GET.get('to-project')
        to_section = self.request.GET.get('to-section')

        if to_project:
            try:
                project = Project.objects.get(pk=to_project)
            except Project.DoesNotExist:
                pass
            else:
                context['add_to'] = 'project'
                context['add_to_object'] = project

        elif to_section:
            try:
                section = Section.objects.get(pk=to_section)
            except Section.DoesNotExist:
                pass
            else:
                context['add_to'] = 'section'
                context['add_to_object'] = section

        context['current_workspace'] = self.kwargs['workspace']

        return context

    def post(self, *args, **kwargs):
        params = ujson.loads(self.request.body)

        task_ids = [t[6:] for t in params.keys() if 'task-' in t]

        if len(task_ids) > 0:
            if params.get('remove') == 'yes':
                remove_tasks.delay(task_ids)

            elif params.get('duplicate') == 'yes':
                duplicate_tasks.delay(task_ids)

            else:
                add_to_project = params.get('add-to-project')
                if add_to_project:
                    task_set_project.delay(task_ids, add_to_project)

                add_to_section = params.get('add-to-section')
                if add_to_section:
                    task_set_section.delay(task_ids, add_to_section)

            state = params.get('state')
            if isinstance(state, list):
                state = state[0]
            if state:
                task_set_state.delay(task_ids, state)

            assignee = params.get('assignee')
            if isinstance(assignee, list):
                assignee = assignee[0]
            if assignee:
                task_set_assignee.delay(task_ids, assignee)

        url = self.request.get_full_path()

        if self.request.headers.get('X-Fetch') == 'true':
            return JsonResponse(dict(url=url))
        else:
            return HttpResponseRedirect(url)


@method_decorator(login_required, name='dispatch')
class TaskDetailView(DetailView):

    model = Task

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['current_workspace'] = self.kwargs['workspace']
        return context

    def post(self, *args, **kwargs):
        params = ujson.loads(self.request.body)

        if params.get('remove') == 'yes':
            remove_tasks.delay([self.get_object().id])

            url = reverse_lazy('tasks:task-list', args=[self.kwargs['workspace']])

            if self.request.headers.get('X-Fetch') == 'true':
                return JsonResponse(dict(url=url))
            else:
                return HttpResponseRedirect(url)

        url = self.request.get_full_path()

        if self.request.headers.get('X-Fetch') == 'true':
            return JsonResponse(dict(url=url))
        else:
            return HttpResponseRedirect(url)