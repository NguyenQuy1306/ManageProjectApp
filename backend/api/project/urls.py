from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import ListProjectView

app_name = 'projects'
router = DefaultRouter()

router.register(r"list", ListProjectView)
urlpatterns = [
# Project List View
    path("", include(router.urls)),
    #path('<int:pk>/invite-member/', InviteProjectMemberView.as_view(), name = 'invite-member'),

]