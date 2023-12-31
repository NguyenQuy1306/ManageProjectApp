from django.contrib.auth import views as auth_views
from django.urls import path, re_path, include
from rest_framework_simplejwt import views as jwt_views
from .views import CustomUserCreate, MyTokenObtainPairView
from . import views

from rest_framework.authtoken import views

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('token/obtain/',  MyTokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]