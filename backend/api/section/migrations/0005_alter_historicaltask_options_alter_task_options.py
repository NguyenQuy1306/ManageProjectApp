# Generated by Django 4.2.7 on 2023-11-26 19:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('section', '0004_alter_historicalsection_state_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='historicaltask',
            options={'get_latest_by': ('history_date', 'history_id'), 'ordering': ('-history_date', '-history_id'), 'verbose_name': 'historical task', 'verbose_name_plural': 'historical tasks'},
        ),
        migrations.AlterModelOptions(
            name='task',
            options={'get_latest_by': 'created_at', 'ordering': ['priority', '-title'], 'verbose_name': 'task', 'verbose_name_plural': 'tasks'},
        ),
    ]