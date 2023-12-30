from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import ListProjectView, accept_invitation,decline_invitation, UserList

app_name = 'projects'
router = DefaultRouter()

router.register(r"list", ListProjectView)
urlpatterns = [
# Project List View
    path("", include(router.urls)),
    #path('<int:pk>/invite-member/', InviteProjectMemberView.as_view(), name = 'invite-member'),
    path('accept-invitation/<int:notification_id>/', accept_invitation, name='accept-invitation'),
    path('decline-invitation/<int:notification_id>/', decline_invitation, name='decline-invitation'),
]