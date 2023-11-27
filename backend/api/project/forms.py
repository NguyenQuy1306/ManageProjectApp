from django.forms import Form, ChoiceField, Select


class ProjectGroupByForm(Form):
    CHOICES = [
        ('', 'None'),
        ('state', 'State'),
    ]

    group_by = ChoiceField(
        choices=CHOICES, required=False,
        widget=Select(
            attrs={
                'onchange': 'Turbolinks.visit(document.location.pathname + "?group_by=" + this.value); return false;'
            }
        )
    )