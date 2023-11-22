from django.apps import apps
from django.db import models


class BaseModel(models.Model):
    class Meta:
        abstract = True

    title = models.CharField(max_length=255, db_index=True)
    description = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now=True, db_index=True)
    updated_at = models.DateTimeField(auto_now_add=True, db_index=True)
    completed_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title


# class WeightChoices(models.IntegerChoices):
#     LOW = 1, "Low"
#     MEDIUM = 2, "Medium"
#     HIGH = 3, "High"

# class PriorityChoices(models.IntegerChoices):
#     LOW = 1, "Low"
#     NORMAL = 2, "Normal"
#     HIGH = 3, "High"
#     URGENT = 4, "Urgent"

class ModelWithBudget(models.Model):
    class Meta:
        abstract = True
    budget = models.DecimalField(decimal_places=2, max_digits=10, default=0.00)
    budget_spend = models.DecimalField(decimal_places=2, max_digits=10, default=0.00)
    
    def get_budget_remaining(self):
        return self.budget - self.budget_spend
    def budget_alarm(self):
        if self.get_budget_remaining < 0:
            return True
        return False
class ModelWithProgress(models.Model):
    class Meta:
        abstract = True

    title = models.CharField(max_length=255, db_index=True)
    description = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now=True, db_index=True)
    updated_at = models.DateTimeField(auto_now_add=True, db_index=True)
    completed_at = models.DateTimeField(null=True, blank=True)
    # #app minh
    # weight = models.PositiveIntegerField(choices = WeightChoices.choices , default=WeightChoices.LOW)
    # priority = models.PositiveIntegerField(choices = PriorityChoices.choices, default= PriorityChoices.LOW)
    #app co san
    total_points = models.PositiveIntegerField(default=0)
    task_count = models.PositiveIntegerField(default=0) 
    points_done = models.PositiveIntegerField(default=0)
    progress = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

    def update_points_and_progress(self, save=True):
        Task = apps.get_model('stories', 'Task')
        TaskState = apps.get_model('stories', 'TaskState')

        parent_dict = {self._meta.model_name: self.id}

        total_points = Task.objects.filter(**parent_dict)\
            .aggregate(models.Sum('points'))['points__sum'] or 0

        params = parent_dict.copy()
        params['state__stype'] = TaskState.STATE_DONE
        points_done = Task.objects.filter(**params)\
            .aggregate(models.Sum('points'))['points__sum'] or 0

        self.total_points = total_points
        self.points_done = points_done
        self.Task_count = Task.objects.filter(**parent_dict).count()

        if total_points > 0:
            self.progress = int(float(points_done) / total_points * 100)
        else:
            self.progress = 0

        if save:
            self.save()
