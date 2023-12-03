from django.urls import path

from .views import ProjectCreateView, ProjectDetailView, ProjectList, ProjectUpdateView, accept_invitation,decline_invitation, InviteProjectMemberView

app_name = 'projects'

urlpatterns = [
    path('add/', ProjectCreateView.as_view(), name='project-add'),
    path('<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
    path('<int:pk>/edit/', ProjectUpdateView.as_view(), name='project-edit'),
    path('', ProjectList.as_view(), name='project-list'),
    path('<int:pk>/invite-member/', InviteProjectMemberView.as_view(), name = 'invite-member'),
    path('accept-invitation/<int:notification_id>/', accept_invitation, name='accept-invitation'),
    path('decline-invitation/<int:notification_id>/', decline_invitation, name='decline-invitation'),
]