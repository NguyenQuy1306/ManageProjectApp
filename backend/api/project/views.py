from itertools import groupby

import ujson
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, JsonResponse
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.contrib import messages
from django.shortcuts import redirect

from django.views.generic import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, FormView
from rest_framework import viewsets

from api.task.forms import TaskFilterForm, SectionFilterForm, TaskGroupByForm
from api.task.tasks import task_set_assignee, task_set_state,section_set_state
from api.workspace.models import Workspace
from api.user.models import User

from ..utils import get_clean_next_url
from .forms import ProjectGroupByForm, ProjectInviteForm
from .models import Project, ProjectMember
from .serializers import ProjectSerializer
from .tasks import duplicate_projects, remove_projects, reset_project

from notifications import models as notification_models


@login_required
def accept_invitation(request, notification_id):
    notification = get_object_or_404(Notification, id=notification_id)
    project_member = get_object_or_404(ProjectMember, invitation_notification=notification)

    # Handle the acceptance logic
    # ...

    # Delete the notification once processed
    notification.delete()

    return redirect('your_success_redirect_view')

@login_required
def decline_invitation(request, notification_id):
    notification = get_object_or_404(Notification, id=notification_id)
    project_member = get_object_or_404(ProjectMember, invitation_notification=notification)

    # Handle the decline logic
    # ...

    # Delete the notification once processed
    notification.delete()

    return redirect('your_success_redirect_view')
@method_decorator(login_required, name='dispatch')
class ProjectDetailView(DetailView):

    model = Project

    def get_children(self):
        queryset = self.get_object().section_set\
            .select_related('project')\
            .order_by('project__budget', 'budget')

        config = dict(
            project=('project__name', lambda section: section.project and section.project.title or 'No Epic'),
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
        context['group_by_form'] = ProjectGroupByForm(self.request.GET)
        context['objects_by_group'] = self.get_children()
        context['group_by'] = self.request.GET.get('group_by')
        context['filters_form'] = SectionFilterForm(self.request.POST)
        context['current_workspace'] = self.kwargs['workspace']
        return context

    def post(self, *args, **kwargs):
        params = ujson.loads(self.request.body)
        url = self.request.get_full_path()
        
        if params.get('remove') == 'yes':
            remove_projects.delay([self.get_object().id])
            url = reverse_lazy('projects:project-list', args=[self.kwargs['workspace']])

        elif params.get('project-reset') == 'yes':
            section_ids = [t[6:] for t in params.keys() if 'section-' in t]
            reset_project.delay(section_ids)

        else:
            state = params.get('state')
            if isinstance(state, list):
                state = state[0]
            if state:
                section_ids = [t[6:] for t in params.keys() if 'section-' in t]
                section_set_state.delay(section_ids, state)

            # assignee = params.get('assignee')
            # if isinstance(assignee, list):
            #     assignee = assignee[0]
            # if assignee:
            #     section_ids = [t[6:] for t in params.keys() if 'section-' in t]
            #     section_set_assignee.delay(section_ids, assignee)

        if self.request.headers.get('X-Fetch') == 'true':
            return JsonResponse(dict(url=url))
        else:
            return HttpResponseRedirect(url)
@method_decorator(login_required, name='dispatch')
class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class BaseListView(ListView):
    paginate_by = 10

    filter_fields = {}
    select_related = None
    prefetch_related = None

    def _build_filters(self, q):
        params = {}

        for part in (q or '').split():
            if ":" in part:
                field, value = part.split(':')
                try:
                    operator = self.filter_fields[field]
                    params[operator] = value
                except KeyError:
                    continue
            else:
                params['title__icontains'] = part

        return params

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        if self.request.GET.get('q') is not None:
            context['show_all_url'] = self.request.path

        context['title'] = self.model._meta.verbose_name_plural.capitalize()
        context['singular_title'] = self.model._meta.verbose_name.capitalize()
        context['current_workspace'] = self.kwargs['workspace']

        return context

    def get_queryset(self):
        qs = self.model.objects

        q = self.request.GET.get('q')

        params = dict(workspace__slug=self.kwargs['workspace'])

        if q is None:
            qs = qs.all()
        else:
            params.update(self._build_filters(q))
            qs = qs.filter(**params)

        if self.select_related is not None:
            qs = qs.select_related(*self.select_related)

        if self.prefetch_related is not None:
            qs = qs.prefetch_related(*self.prefetch_related)

        return qs


@method_decorator(login_required, name='dispatch')
class ProjectList(BaseListView):
    model = Project
    filter_fields = {}
    select_related = None
    prefetch_related = None
    def post(self, *args, **kwargs):
        params = ujson.loads(self.request.body)

        project_ids = [t[7:] for t in params.keys() if 'project-' in t]

        if len(project_ids) > 0:
            if params.get('remove') == 'yes':
                for pk in project_ids:
                    try:
                        project = Project.objects.get(pk=pk)
                    except Project.DoesNotExist:
                        continue

                    project.delete()

            if params.get('duplicate') == 'yes':
                for pk in project_ids:
                    try:
                        project = Project.objects.get(pk=pk)
                    except Project.DoesNotExist:
                        continue

                    project.duplicate()

        url = self.request.get_full_path()

        if self.request.headers.get('X-Fetch') == 'true':
            return JsonResponse(dict(url=url))
        else:
            return HttpResponseRedirect(url)
class ProjectBaseView(object):
    model = Project
    fields = [
        'title', 'description','budget', 'starts_at', 'ends_at'
    ]
    @property
    def success_url(self):
        return get_clean_next_url(self.request, reverse_lazy('projects:project-list', args=[self.kwargs['workspace']]))

    def form_valid(self, form):
        response = super().form_valid(form)

        url = self.get_success_url()

        if self.request.headers.get('X-Fetch') == 'true':
            return JsonResponse(dict(url=url))

        return response

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        project_add_url = reverse_lazy('projects:project-add', args=[self.kwargs['workspace']])
        context['project_add_url'] = project_add_url
        context['current_workspace'] = self.kwargs['workspace']
        return context
    
@method_decorator(login_required, name='dispatch')
class InviteProjectMemberView(ProjectBaseView, CreateView):

    def post(self, *args, **kwargs):
        data = ujson.loads(self.request.body)
        form = self.get_form_class()(data)
        return self.form_valid(form)

    def form_valid(self, form):
        project = self.get_project()
        form.instance.workspace = Workspace.objects.get(pk=1)
        email = form.cleaned_data['email']

        # Check if the user with the provided email exists
        user = User.objects.filter(email=email).first()

        if user:
            # Check if the user is already a member of the project
            if not ProjectMember.objects.filter(project=project, user=user).exists():
                # Add the user as a member
                project_member = ProjectMember.objects.create(
                    project=project,
                    user=user,
                    role=ProjectMember.MB,
                    status=ProjectMember.ACTIVE
                )

                # Send invitation notification
                project_member.send_invitation_notification()

                messages.success(self.request, f"Invitation sent to {email}.")
            else:
                messages.warning(self.request, f"{email} is already a member of the project.")
        else:
            messages.warning(self.request, f"No user found with email {email}.")

        return redirect(reverse_lazy('projects:project-detail', args=[str(project.id)]))

    def form_invalid(self, form):
        project = self.get_project()
        messages.error(self.request, "Invalid form submission. Please check your input.")
        return redirect(reverse_lazy('projects:project-detail', args=[str(project.id)]))


@method_decorator(login_required, name='dispatch')
class ProjectCreateView(ProjectBaseView, CreateView):

    def post(self, *args, **kwargs):
        data = ujson.loads(self.request.body)
        form = self.get_form_class()(data)
        return self.form_valid(form)

    def form_valid(self, form):
        form.instance.workspace = Workspace.objects.get(pk=1)
        form.instance.owner_id = self.request.user.id
        return super().form_valid(form)


@method_decorator(login_required, name='dispatch')
class ProjectUpdateView(ProjectBaseView, UpdateView):

    def post(self, *args, **kwargs):
        data = ujson.loads(self.request.body)

        if data.get('save-as-new'):
            form = self.get_form_class()(data)
        else:
            form = self.get_form_class()(data, instance=self.get_object())

        return self.form_valid(form)