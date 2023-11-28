from django.contrib import admin

from .models import *
# Register your models here.
class SectionMemberAdmin(admin.TabularInline):
    model = SectionMember

class SectionAdmin(admin.ModelAdmin):
    inlines = [SectionMemberAdmin]
    list_display = ['__str__', 'section_leader']
    class Meta:
        model = Section
admin.site.register(Section, SectionAdmin)
admin.site.register(Task)
