from django.urls import path

from .views import SectionCreateView, SectionDetailView, SectionList, SectionUpdateView,TaskCreateView, TaskDetailView, TaskUpdateView, TaskList

app_name = 'tasks'

urlpatterns = [
    path('sections/add/', SectionCreateView.as_view(), name='section-add'),
    path('sections/<int:pk>/edit/', SectionUpdateView.as_view(), name='section-edit'),
    path('sections/<int:pk>/', SectionDetailView.as_view(), name='section-detail'),
    path('sections/', SectionList.as_view(), name='section-list'),
    path('tasks/add/', TaskCreateView.as_view(), name='task-add'),
    path('tasks/<int:pk>/edit/', TaskUpdateView.as_view(), name='task-edit'),
    path('tasks/<int:pk>/', TaskDetailView.as_view(), name='task-detail'),
    path('tasks/', TaskList.as_view(), name='task-list'),
]