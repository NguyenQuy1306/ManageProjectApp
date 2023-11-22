import copy

from django.conf import settings
from django.db import models
from django.db.models.signals import pre_save, post_save, post_delete
from django.dispatch import receiver
from django.urls import reverse

from simple_history.models import HistoricalRecords

from tagulous.models import TagField

from api.models import BaseModel, ModelWithProgress, ModelWithBudget


class StateModel(models.Model):
    class Meta:
        abstract = True
        ordering = ['stype', 'name']

    STATE_UNSTARTED = 0
    STATE_STARTED = 1
    STATE_DONE = 2

    STATE_TYPES = (
        (STATE_UNSTARTED, 'Unstarted'),
        (STATE_STARTED, 'Started'),
        (STATE_DONE, 'Done'),
    )

    slug = models.SlugField(max_length=2, primary_key=True)
    name = models.CharField(max_length=100, db_index=True)
    stype = models.PositiveIntegerField(db_index=True, choices=STATE_TYPES, default=STATE_UNSTARTED)

    def __str__(self):
        return self.name


class SectionState(models.IntegerChoices):
    UNSTARTED = 1, "To do"
    STARTED = 2, "In process"
    INSPECT = 3, "Ready for inspection"
    DONE = 4, "Done"



class TaskState(models.IntegerChoices):
    UNSTARTED = 1, "To do"
    STARTED = 2, "In process"
    INSPECT = 3, "Ready for inspection"
    DONE = 4, "Done"

class WeightChoices(models.IntegerChoices):
    LOW = 1, "Low"
    MEDIUM = 2, "Medium"
    HIGH = 3, "High"

class PriorityChoices(models.IntegerChoices):
    LOW = 1, "Low"
    NORMAL = 2, "Normal"
    HIGH = 3, "High"
    URGENT = 4, "Urgent"
class Section(ModelWithProgress, ModelWithBudget):
    """
    """

    class Meta:
        get_latest_by = 'created_at'
        ordering = ['priority', '-title']
        indexes = [
            models.Index(fields=['title', 'priority']),
            models.Index(fields=['title']),
        ]
        verbose_name = 'section'
        verbose_name_plural = 'sections'

    weight = models.PositiveIntegerField(choices = WeightChoices.choices, default = WeightChoices.LOW)
    priority = models.PositiveIntegerField(choices = PriorityChoices.choices, default = PriorityChoices.LOW)
    state = models.IntegerField(choices = SectionState.choices, default = SectionState.UNSTARTED)

    section_leader = models.ForeignKey("project.ProjectMember", on_delete=models.CASCADE)
    members = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='section_members', blank=True, through='SectionMember')
    project = models.ForeignKey('project.Project', on_delete=models.CASCADE)

    tags = TagField(blank=True)

    history = HistoricalRecords()

    def get_absolute_url(self):
        return reverse('section:section-detail', args=[self.project.slug, str(self.id)])

    def is_done(self):
        if self.state.stype == StateModel.STATE_DONE:
            return True

        return False

    def duplicate(self):
        cloned = copy.copy(self)
        cloned.pk = None
        cloned.title = 'Copy of ' + self.title
        cloned.save()

        for tag in self.tags.values_list('name', flat=True):
            cloned.tags.add(tag)

    def update_state(self):
        # set section as started when it has one or more started stories
        if Task.objects.filter(state__stype=TaskState.STATE_STARTED, section=self).count() > 0:
            if self.state.stype != SectionState.STATE_STARTED:
                self.state = SectionState.objects.filter(stype=SectionState.STATE_STARTED)[0]

        elif Task.objects.filter(state__stype=TaskState.STATE_UNSTARTED, section=self).count() == self.story_count:
            if self.state.stype != SectionState.STATE_UNSTARTED:
                self.state = SectionState.objects.filter(stype=SectionState.STATE_UNSTARTED)[0]

        self.save()
class StatusChoices(models.TextChoices):
    BUSY = "B", "Busy"
    AVAILABLE = "A", "Available"
#khi assign user vao task thi set status ve busy, default la Available
class SectionMember(models.Model):
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  #khi xoa user khoi project thi user trong section cung bi xoa
    #user must be in ProjectMember table
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    status = models.CharField(choices = StatusChoices.choices, default = StatusChoices.AVAILABLE, max_length=10 ) # set INACTIVE when delete User
    
    class Meta:
        unique_together = ('user', 'section')
class Task(BaseModel):
    """
    """
    class Meta:
        get_latest_by = 'created_at'
        ordering = ['priority', '-title']
        indexes = [
            models.Index(fields=['title', 'priority']),
            models.Index(fields=['title']),
        ]
        verbose_name = 'task'
        verbose_name_plural = 'tasks'

    section = models.ForeignKey(Section, null=True, blank=True, on_delete=models.SET_NULL)
    project = models.ForeignKey('project.Project', null=True, blank=True, on_delete=models.SET_NULL) # de list task trong project
    
    weight = models.PositiveIntegerField(choices = WeightChoices.choices, default = WeightChoices.LOW)
    priority = models.PositiveIntegerField(choices = PriorityChoices.choices, default = PriorityChoices.LOW)
    
    points = models.PositiveIntegerField(default=0)
    state = models.IntegerField(choices = TaskState.choices, default=TaskState.UNSTARTED)

    assignor = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name='requested_tasks')
    assignee = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name='assigned_tasks')

    tags = TagField(blank=True)

    history = HistoricalRecords()

    def get_absolute_url(self):
        return reverse('section:task-detail', args=[self.project.slug, str(self.id)])

    def is_done(self):
        if self.state.stype == StateModel.STATE_DONE:
            return True

        return False

    def duplicate(self):
        cloned = copy.copy(self)
        cloned.pk = None
        cloned.title = 'Copy of ' + self.title
        cloned.save()

        for task in self.task_set.all():
            task.duplicate(task=cloned)

        for tag in self.tags.values_list('name', flat=True):
            cloned.tags.add(tag)


# @receiver(pre_save, sender=Task)
# def handle_story_pre_save(sender, **kwargs):
#     if not kwargs.get('raw', False):
#         instance = kwargs['instance']

#         if instance.id is None:
#             previous_section = None
#         else:
#             try:
#                 previous_section = Section.objects.get(story__id=instance.id)
#             except Section.DoesNotExist:
#                 previous_section = None

#         # the section has changed: update here the previous one,
#         # the new one will be updated in post_save handler :)
#         if (previous_section != instance.section) and previous_section is not None:
#             from .tasks import handle_section_change
#             # 10 seconds till the section changes to the new one so this will have
#             # one story less
#             handle_section_change.apply_async((previous_section.id, ), countdown=10)

#         if instance.id is None:
#             previous_project = None
#         else:
#             from matorral.projects.models import Project
#             try:
#                 previous_project = Project.objects.get(story__id=instance.id)
#             except Project.DoesNotExist:
#                 previous_project = None

#         # the project has changed: update here the previous one,
#         # the new one will be updated in post_save handler :)
#         if (previous_project != instance.project) and previous_project is not None:
#             from matorral.projects.tasks import handle_project_change
#             # 10 seconds till the project changes to the new one so this will have
#             # one story less
#             handle_project_change.apply_async((previous_project.id, ), countdown=10)


# @receiver(post_save, sender=Task)
# def handle_story_post_save(sender, **kwargs):
#     from .tasks import handle_story_change
#     if not kwargs.get('raw', False):
#         instance = kwargs['instance']
#         handle_story_change.delay(instance.id)


# @receiver(post_delete, sender=Task)
# def handle_story_post_delete(sender, **kwargs):
#     from .tasks import handle_story_change
#     if not kwargs.get('raw', False):
#         instance = kwargs['instance']
#         handle_story_change.delay(instance.id)


class Todo(BaseModel):
    """
    """
    task = models.ForeignKey(Task, on_delete=models.CASCADE)

    def get_absolute_url(self):
        return reverse('section:task-view', args=[str(self.id)])

    def duplicate(self, parent=None):
        cloned = copy.copy(self)
        cloned.pk = None
        cloned.title = self.title

        if parent is not None:
            cloned.task = parent

        cloned.save()
