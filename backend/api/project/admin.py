from django.contrib import admin

from .models import *
# Register your models here.
class ProjectMemberAdmin(admin.TabularInline):
    model = ProjectMember

class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectMemberAdmin]
    list_display = ['__str__', 'owner']
    class Meta:
        model = Project
admin.site.register(Project, ProjectAdmin)
