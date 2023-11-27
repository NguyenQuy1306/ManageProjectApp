from django.urls import path

from .views import ProjectCreateView, ProjectDetailView, ProjectList, ProjectUpdateView

app_name = 'projects'

urlpatterns = [
    path('add/', ProjectCreateView.as_view(), name='project-add'),
    path('<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
    path('<int:pk>/edit/', ProjectUpdateView.as_view(), name='project-edit'),
    path('', ProjectList.as_view(), name='project-list'),
]