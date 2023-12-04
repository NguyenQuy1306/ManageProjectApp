# -*- coding: utf-8 -*-
from __future__ import unicode_literals, absolute_import

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from notifications.models import Notification

class User(AbstractUser):

    # First Name and Last Name do not cover name patterns
    # around the globe.
    first_name = models.CharField(blank=True, max_length=255)
    last_name = models.CharField(blank=True, max_length=255)
    invitation_notification = models.ForeignKey(Notification, null=True, blank=True, on_delete=models.SET_NULL)      
    # def __str__(self):
    #     return self.username
    
    def get_absolute_url(self):
        return reverse('users:user-detail', kwargs={'username': self.username})
