from django.contrib.auth import views as auth_views
from django.urls import path, re_path, include

from . import views

from rest_framework.authtoken import views

urlpatterns = [
    re_path(r'^api-token-auth/', views.obtain_auth_token),
    re_path(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
