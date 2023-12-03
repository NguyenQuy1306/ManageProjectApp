# urls.py
from django.urls import path
from .views import unread_notifications

app_name ='notifications'
urlpatterns = [
    # Your existing URLs

    # Add this URL
    path('unread/', unread_notifications, name='unread'),
]
