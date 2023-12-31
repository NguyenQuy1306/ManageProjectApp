# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf import settings
from django.urls import include, path, re_path
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from django.views import defaults as default_views

from rest_framework.routers import DefaultRouter

from api.workspace import views as workspaces_views
from api.project import views as projects_views

from django.contrib.auth import views as auth_views
from api.authentication import views as views
from api.authentication.forms import LoginForm
from .views import homepage

router = DefaultRouter()
# router.register(r'workspaces', workspaces_views.WorkspaceViewSet)
# # router.register(r'epics', tasks_views.EpicViewSet)
router.register(r'projects', projects_views.ListProjectView)
# # router.register(r'tasks', tasks_views.StoryViewSet)
# # router.register(r'tasks', tasks_views.TaskViewSet)

urlpatterns = [
    # Django Admin, use {% url 'admin:index' %}
    re_path(settings.ADMIN_URL, admin.site.urls),

    # # health checks
    # re_path(r'^health-check/', include('watchman.urls')),
    # re_path(r'^health/', include('api.health_checks.urls')),
    path('', include('api.authentication.urls')),
    re_path(r'^v1/', include(router.urls)),
    # path('projects/',include('api.project.urls')),
    # User management
    # re_path(r'users/', include('api.user.urls', namespace='users')),
    re_path(r'notifications/', include('api.notification.urls', namespace='notifications')),
    # comments app
    re_path(r'^comments/', include('django_comments_xtd.urls')),

    # # API urls
    # re_path(r'^api/v1/', include('api.authentication.urls')),
    # re_path(r'^api/v1/', include(router.urls)),

    # App
    path(r'<workspace>/workspaces/', include('api.workspace.urls', namespace='workspaces')),
    # path(r'<workspace>/', include('api.dashboard.urls', namespace='dashboard')),
    path(r'<workspace>/', include('api.task.urls', namespace='tasks')),
    path(r'<workspace>/projects/', include('api.project.urls', namespace='projects')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    import debug_toolbar

    urlpatterns = [  # prepend
        re_path(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns

    urlpatterns += [
        path('400/', default_views.bad_request, kwargs={'exception': Exception('Bad Request!')}),
        path('403/', default_views.permission_denied, kwargs={'exception': Exception('Permission Denied')}),
        path('404/', default_views.page_not_found, kwargs={'exception': Exception('Page not Found')}),
        path('500/', default_views.server_error),
    ]