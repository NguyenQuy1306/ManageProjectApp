from django.forms import Select, Form, ChoiceField, ModelChoiceField
from django import forms
from api.user.models import User

from .models import SectionState, TaskState


custom_select = Select(attrs={
    'form': 'object-list',
    'onchange': 'postForm(document.querySelector("#object-list"));'
})


class SectionFilterForm(Form):
    state = forms.ChoiceField(choices = SectionState.choices)

    section_leader = ModelChoiceField(
        empty_label='--Set Owner--',
        queryset=User.objects.all(),
        required=False,
        widget=custom_select
    )


class TaskFilterForm(Form):
    state = forms.ChoiceField(choices = TaskState.choices,widget=custom_select)
    assignor = ModelChoiceField(
        empty_label='--Set Assignor--',
        queryset=User.objects.all(),
        required=False,
        widget=custom_select
    )
    assignee = ModelChoiceField(
        empty_label='--Set Assignee--',
        queryset=User.objects.all(),
        required=False,
        widget=custom_select
    )


class SectionGroupByForm(Form):
    state = ChoiceField(choices = SectionState.choices)
    CHOICES = [
        ('', 'None'),
        ('section_leader', 'Section Leader'),
        ('state', 'State'),
        ('project', 'Project'),
    ]

    group_by = ChoiceField(choices=CHOICES, required=False, widget=Select(attrs={'onchange': 'this.form.submit();'}))