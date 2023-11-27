from django.contrib.auth import views as auth_views
from django.urls import path, re_path, include

from . import views
from .forms import LoginForm

from rest_framework.authtoken import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', auth_views.LoginView.as_view(template_name='core/login.html', authentication_form=LoginForm), name='login'),
    path('logout/', views.logout_user, name='logout_user'),
]
