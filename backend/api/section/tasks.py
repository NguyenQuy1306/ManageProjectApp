from api.taskapp.celery import app

from .models import  Task, TaskState


@app.task(ignore_result=True)
def duplicate_sections(section_ids):
    for pk in section_ids:
        try:
            section = Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            continue

        section.duplicate()


@app.task(ignore_result=True)
def remove_sections(section_ids):
    Task.objects.filter(id__in=section_ids).delete()

    # for epic in Epic.objects.filter(section__id__in=section_ids).distinct():
    #     epic.update_state()
    #     epic.update_points_and_progress()

    from api.project.models import Project
    for project in Project.objects.filter(section__id__in=section_ids).distinct():
        project.update_points_and_progress()


@app.task(ignore_result=True)
def section_set_assignee(section_ids, user_id):
    Task.objects.filter(id__in=section_ids).update(assignee=user_id)


@app.task(ignore_result=True)
def section_set_state(section_ids, state_slug):
    try:
        state = TaskState.objects.get(slug=state_slug)
    except TaskState.DoesNotExist:
        return

    Task.objects.filter(id__in=section_ids).update(state=state)


# @app.task(ignore_result=True)
# def duplicate_epics(epic_ids):
#     for pk in epic_ids:
#         try:
#             epic = Epic.objects.get(pk=pk)
#         except Epic.DoesNotExist:
#             continue

#         epic.duplicate()


# @app.task(ignore_result=True)
# def remove_epics(epic_ids):
#     Epic.objects.filter(id__in=epic_ids).delete()


# @app.task(ignore_result=True)
# def epic_set_owner(epic_ids, user_id):
#     Epic.objects.filter(id__in=epic_ids).update(owner=user_id)


# @app.task(ignore_result=True)
# def epic_set_state(epic_ids, state_slug):
#     try:
#         state = EpicState.objects.get(slug=state_slug)
#     except EpicState.DoesNotExist:
#         return

#     Epic.objects.filter(id__in=epic_ids).update(state=state)

#     for epic in Epic.objects.filter(id__in=epic_ids):
#         epic.update_state()


# @app.task(ignore_result=True)
# def reset_epic(section_ids):
#     # get affected project and epic ids before removing them: evaluate queryset
#     # because they're lazy :)
#     epic_ids = list(Task.objects.filter(id__in=section_ids).values_list('epic_id', flat=True))
#     project_ids = list(Task.objects.filter(id__in=section_ids).values_list('project_id', flat=True))

#     Task.objects.filter(id__in=section_ids).update(epic=None)

#     for epic in Epic.objects.filter(id__in=epic_ids):
#         epic.update_state()
#         epic.update_points_and_progress()

#     from matorral.projects.models import Project
#     for project in Project.objects.filter(id__in=project_ids):
#         project.update_points_and_progress()


@app.task(ignore_result=True)
def handle_section_change(section_id):
    try:
        section = Task.objects.get(pk=section_id)
    except Task.DoesNotExist:
        return

    if section.epic is not None:
        section.epic.update_points_and_progress()
        section.epic.update_state()

    if section.project is not None:
        section.project.update_points_and_progress()


# @app.task(ignore_result=True)
# def handle_epic_change(epic_id):
#     try:
#         epic = Epic.objects.get(pk=epic_id)
#     except Epic.DoesNotExist:
#         return

#     epic.update_points_and_progress()


# @app.task(ignore_result=True)
# def section_set_epic(section_ids, epic_id):
#     try:
#         epic = Epic.objects.get(pk=epic_id)
#     except Epic.DoesNotExist:
#         return

#     for section in Task.objects.filter(id__in=section_ids):
#         section.epic = epic
#         section.save()


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