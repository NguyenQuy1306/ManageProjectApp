from collections.abc import Iterable
import copy

from django.conf import settings
from django.db import models
from django.db.models.signals import pre_save, post_save, post_delete
from django.dispatch import receiver
from django.urls import reverse

from simple_history.models import HistoricalRecords

from tagulous.models import TagField

from api.models import BaseModel, ModelWithProgress, ModelWithBudget
from api.project.models import ProjectMember


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

    section_leader = models.ForeignKey(ProjectMember, on_delete=models.CASCADE)
    members = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='section_members', blank=True, through='SectionMember')
    project = models.ForeignKey('project.Project', on_delete=models.CASCADE)

    tags = TagField(blank=True)

    history = HistoricalRecords()

        
    def get_absolute_url(self):
        return reverse('tasks:section-detail', args=[self.project.slug, str(self.id)])

    def is_done(self):
        if self.state == SectionState.DONE:
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
        if Task.objects.filter(state__stype=TaskState.STARTED, section=self).count() > 0:
            if self.state != SectionState.STARTED:
                self.state = SectionState.STARTED

        # set section as unstarted when all its stories are unstarted
        elif Task.objects.filter(state__stype=TaskState.UNSTARTED, section=self).count() == self.task_count:
            if self.state != SectionState.UNSTARTED:
                self.state = SectionState.UNSTARTED
        if self.section is not None:
            self.section.update_points_and_progress()
            self.section.update_state()

        if self.project is not None:
            self.project.update_points_and_progress()
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

    section = models.ForeignKey(Section, blank=True, on_delete=models.CASCADE)
    project = models.ForeignKey('project.Project', blank=True, on_delete=models.CASCADE) # de list task trong project
    
    weight = models.PositiveIntegerField(choices = WeightChoices.choices, default = WeightChoices.LOW)
    priority = models.PositiveIntegerField(choices = PriorityChoices.choices, default = PriorityChoices.LOW)
    
    points = models.PositiveIntegerField(default=0)
    state = models.IntegerField(choices = TaskState.choices, default = TaskState.UNSTARTED)

    assignor = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name='requested_tasks')
    assignee = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name='assigned_tasks')

    tags = TagField(blank=True)

    history = HistoricalRecords()

    def save(self, *args, **kwargs):
        # Update counts and points for the new section and project
        self.points = self.priority * 3 + self.weight * 2

        return super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('tasks:task-detail', args=[self.project.slug, str(self.id)])

    def is_done(self):
        if self.state == TaskState.DONE:
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


class Todo(BaseModel):
    """
    """
    task = models.ForeignKey(Task, on_delete=models.CASCADE)

    def get_absolute_url(self):
        return reverse('tasks:task-view', args=[str(self.id)])

    def duplicate(self, parent=None):
        cloned = copy.copy(self)
        cloned.pk = None
        cloned.title = self.title

        if parent is not None:
            cloned.task = parent

        cloned.save()
