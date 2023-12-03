# Generated by Django 4.2.7 on 2023-12-03 19:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0003_projectmember_invitation_notification'),
        ('task', '0004_alter_historicalsection_state_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='project',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, to='project.project'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='task',
            name='section',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, to='task.section'),
            preserve_default=False,
        ),
    ]