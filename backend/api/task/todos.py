from api.taskapp.celery import app

from .models import Section, SectionState, Task, TaskState

@app.task(ignore_result=True)
def duplicate_tasks(task_ids):
    for pk in task_ids:
        try:
            task = Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            continue

        task.duplicate()


@app.task(ignore_result=True)
def remove_tasks(task_ids):
    Task.objects.filter(id__in=task_ids).delete()

    for section in Section.objects.filter(task__id__in=task_ids).distinct():
        section.update_state()
        section.update_points_and_progress()

    from api.project.models import Project
    for project in Project.objects.filter(task__id__in=task_ids).distinct():
        project.update_points_and_progress()


@app.task(ignore_result=True)
def task_set_assignee(task_ids, user_id):
    Task.objects.filter(id__in=task_ids).update(assignee=user_id)


@app.task(ignore_result=True)
def task_set_state(task_ids, state_slug):
    try:
        state = TaskState.objects.get(slug=state_slug)
    except TaskState.DoesNotExist:
        return

    Task.objects.filter(id__in=task_ids).update(state=state)


@app.task(ignore_result=True)
def duplicate_sections(section_ids):
    for pk in section_ids:
        try:
            section = Section.objects.get(pk=pk)
        except Section.DoesNotExist:
            continue

        section.duplicate()


@app.task(ignore_result=True)
def remove_sections(section_ids):
    Section.objects.filter(id__in=section_ids).delete()


@app.task(ignore_result=True)
def section_set_section_leader(section_ids, user_id):
    Section.objects.filter(id__in=section_ids).update(section_leader=user_id)


@app.task(ignore_result=True)
def section_set_state(section_ids, state_slug):
    try:
        state = SectionState.objects.get(slug=state_slug)
    except SectionState.DoesNotExist:
        return

    Section.objects.filter(id__in=section_ids).update(state=state)

    for section in Section.objects.filter(id__in=section_ids):
        section.update_state()


@app.task(ignore_result=True)
def reset_section(task_ids):
    # get affected project and section ids before removing them: evaluate queryset
    # because they're lazy :)
    section_ids = list(Task.objects.filter(id__in=task_ids).values_list('section_id', flat=True))
    project_ids = list(Task.objects.filter(id__in=task_ids).values_list('project_id', flat=True))

    Task.objects.filter(id__in=task_ids).update(section=None)

    for section in Section.objects.filter(id__in=section_ids):
        section.update_state()
        section.update_points_and_progress()

    from api.project.models import Project
    for project in Project.objects.filter(id__in=project_ids):
        project.update_points_and_progress()


@app.task(ignore_result=True)
def handle_task_change(task_id):
    try:
        task = Task.objects.get(pk=task_id)
    except Task.DoesNotExist:
        return

    if task.section is not None:
        task.section.update_points_and_progress()
        task.section.update_state()

    if task.project is not None:
        task.project.update_points_and_progress()


@app.task(ignore_result=True)
def handle_section_change(section_id):
    try:
        section = Section.objects.get(pk=section_id)
    except Section.DoesNotExist:
        return

    section.update_points_and_progress()


@app.task(ignore_result=True)
def task_set_section(task_ids, section_id):
    try:
        section = Section.objects.get(pk=section_id)
    except Section.DoesNotExist:
        return

    for task in Task.objects.filter(id__in=task_ids):
        task.section = section
        task.save()


@app.task(ignore_result=True)
def task_set_project(task_ids, project_id):
    from api.project.models import Project
    try:
        project = Project.objects.get(pk=project_id)
    except Project.DoesNotExist:
        return

    for task in Task.objects.filter(id__in=task_ids):
        task.project = project
        task.save()
@app.task(ignore_result=True)
def section_set_project(section_ids, project_id):
    from api.project.models import Project
    try:
        project = Project.objects.get(pk=project_id)
    except Project.DoesNotExist:
        return

    for section in Task.objects.filter(id__in=section_ids):
        section.project = project
        section.save()
