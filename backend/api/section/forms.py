from django.forms import Select, Form, ChoiceField, ModelChoiceField
from django import forms
from api.user.models import User

from .models import SectionState


custom_select = Select(attrs={
    'form': 'object-list',
    'onchange': 'postForm(document.querySelector("#object-list"));'
})


class SectionFilterForm(Form):
    state = forms.ChoiceField(choices = SectionState)

    assignee = ModelChoiceField(
        empty_label='--Set Assignee--',
        queryset=User.objects.all(),
        required=False,
        widget=custom_select
    )


class EpicGroupByForm(Form):
    CHOICES = [
        ('', 'None'),
        ('requester', 'Requester'),
        ('assignee', 'Assignee'),
        ('state', 'State'),
        ('sprint', 'Sprint'),
    ]

    group_by = ChoiceField(choices=CHOICES, required=False, widget=Select(attrs={'onchange': 'this.form.submit();'}))