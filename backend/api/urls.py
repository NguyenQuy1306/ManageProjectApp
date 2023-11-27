from django.urls import include, path
from api.authentication.views import  CustomUserCreate
from rest_framework_simplejwt import views as jwt_views
from .views import homepage

urlpatterns = [
    path('token/obtain/',  jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('projects/', include('api.project.urls', 'projects')),
    path('', homepage)
]
