from datetime import date
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from notifications.models import Notification
from api.taskapp.celery import app

from api.project.models import Project, ProjectMember


@app.task(ignore_result=True)
def update_state():
    # move to state=started all projects that have began
    Project.objects.filter(state=Project.STATE_UNSTARTED, ends_at__gte=date.today()).update(state=Project.STATE_STARTED)
    # move to state=done all projects that have finished
    Project.objects.exclude(state=Project.STATE_DONE).filter(ends_at__lt=date.today()).update(state=Project.STATE_DONE)

@app.task(ignore_result=True)
def duplicate_projects(project_ids):
    for pk in project_ids:
        try:
            project = Project.objects.get(pk=pk)
        except Project.DoesNotExist:
            continue

        project.duplicate()


@app.task(ignore_result=True)
def remove_projects(project_ids):
    Project.objects.filter(id__in=project_ids).delete()


@app.task(ignore_result=True)
def reset_project(story_ids):
    from api.task.models import Task

    # get affected project ids before removing them: evaluate queryset because
    # they're lazy :)
    project_ids = list(Task.objects.filter(id__in=story_ids).values_list('project_id', flat=True))

    Task.objects.filter(id__in=story_ids).update(project=None)

    for project in Project.objects.filter(id__in=project_ids):
        project.update_points_and_progress()


@app.task(ignore_result=True)
def handle_project_change(epic_id):
    try:
        project = Project.objects.get(pk=epic_id)
    except Project.DoesNotExist:
        return

    project.update_points_and_progress()
