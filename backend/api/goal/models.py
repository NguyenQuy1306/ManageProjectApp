import copy

from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils.text import slugify

from simple_history.models import HistoricalRecords

from api.models import ModelWithProgress, ModelWithBudget


class Goal(ModelWithProgress):
    """
    """
    STATE_UNSTARTED = 0
    STATE_STARTED = 1
    STATE_DONE = 2

    STATE_TYPES = (
        (STATE_UNSTARTED, 'Unstarted'),
        (STATE_STARTED, 'Started'),
        (STATE_DONE, 'Done'),
    )

    class Meta:
        get_latest_by = 'created_at'
        ordering = ['updated_at', 'starts_at']
        indexes = [
            models.Index(fields=['updated_at', 'starts_at']),
            models.Index(fields=['starts_at', 'ends_at']),
            models.Index(fields=['starts_at']),
            models.Index(fields=['ends_at']),
            models.Index(fields=['title']),
        ]
        verbose_name = 'Goal'
        verbose_name_plural = 'Goals'

    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    state = models.PositiveIntegerField(db_index=True, choices=STATE_TYPES, default=STATE_UNSTARTED)
    starts_at = models.DateField(db_index=True, null=True, blank=True)
    ends_at = models.DateField(db_index=True, null=True, blank=True)
    history = HistoricalRecords()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('Goals:Goal-view', args=[str(self.id), slugify(self.title)])

    def is_done(self):
        return self.state == self.STATE_DONE

    def is_started(self):
        return self.state == self.STATE_STARTED

    def duplicate(self):
        cloned = copy.copy(self)
        cloned.pk = None
        cloned.title = 'Copy of ' + self.title
        cloned.save()

class GoalMember(models.Model):
    user = models.ForeignKey("project.ProjectMember", on_delete=models.CASCADE)
    Goal = models.ForeignKey(Goal , on_delete=models.SET_NULL, null= True)
    
    class Meta:
        unique_together = ('user','Goal')