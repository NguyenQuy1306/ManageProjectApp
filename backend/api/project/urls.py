from django.urls import path
from .views import ProjectList, ProjectCreateView

app_name = 'projects'
urlpatterns = [
    path('add/', ProjectCreateView, name='project-add'),
    # path('<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
    # path('<int:pk>/edit/', ProjectUpdateView.as_view(), name='project-edit'),
    path('', ProjectList, name='project'),
]
