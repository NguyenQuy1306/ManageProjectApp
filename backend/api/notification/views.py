# views.py
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from notifications.models import Notification

@login_required
def unread_notifications(request):
    # Fetch unread notifications for the current user
    notifications = Notification.objects.filter(recipient=request.user, unread=True)

    # Mark notifications as read once fetched
    notifications.mark_all_as_read()

    return render(request, 'notification/unread_notifications.html', {'notifications': notifications})
