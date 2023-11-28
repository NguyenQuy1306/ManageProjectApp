import copy
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils.text import slugify


from simple_history.models import HistoricalRecords


from api.models import ModelWithProgress, ModelWithBudget
from api.workspace.models import Workspace

class Project(ModelWithProgress, ModelWithBudget):
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
        verbose_name = 'project'
        verbose_name_plural = 'projects'
    slug = models.SlugField(blank = True , null= True)
    state = models.PositiveIntegerField(db_index=True, choices=STATE_TYPES, default=STATE_UNSTARTED)
    
    workspace = models.ForeignKey(Workspace, on_delete=models.CASCADE)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    members = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='project_members', blank=True, through='ProjectMember')

    starts_at = models.DateField(db_index=True, null=True, blank=True)
    ends_at = models.DateField(db_index=True, null=True, blank=True)

    history = HistoricalRecords()

    def save(self, *args, **kwargs):
        self.slug=slugify(self.title)
        super().save(*args, **kwargs)
    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('projects:project-view', args=[str(self.id), slugify(self.title)])

    def is_done(self):
        return self.state == self.STATE_DONE
    
    # def kinh phi  
    # def tien do 

    def is_started(self):
        return self.state == self.STATE_STARTED

    def duplicate(self):
        cloned = copy.copy(self)
        cloned.pk = None
        cloned.title = 'Copy of ' + self.title
        cloned.save()


class StatusChoices(models.TextChoices):
    ACTIVE = "A", "Active"
    PENDING = "P", "Pending"
    INACTIVE = "I", "Inactive"
class ProjectRoleChoices(models.TextChoices):
    PM = "P", "Manager"
    MB = "M", "Member"
    
from tagulous.models import TagField

class ProjectMember(models.Model):
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null = True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    salary = models.PositiveIntegerField()
    bio = models.TextField()
    skills = TagField(blank=True) 
    working_hours_day = models.PositiveIntegerField(default = 8)
    role = models.CharField(choices = ProjectRoleChoices.choices, default= ProjectRoleChoices.MB,max_length=20, null = False)
    status = models.CharField(choices = StatusChoices.choices, default = StatusChoices.ACTIVE, max_length=10 ) # set INACTIVE when delete User
    
    class Meta:
        unique_together = ('user', 'project')