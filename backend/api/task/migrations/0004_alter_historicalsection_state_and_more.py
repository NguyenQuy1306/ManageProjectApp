# Generated by Django 4.2.7 on 2023-12-03 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0003_statemodel_alter_historicalsection_state_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historicalsection',
            name='state',
            field=models.IntegerField(choices=[(1, 'To do'), (2, 'In process'), (3, 'Ready for inspection'), (4, 'Done')], default=1),
        ),
        migrations.AlterField(
            model_name='historicaltask',
            name='state',
            field=models.IntegerField(choices=[(1, 'To do'), (2, 'In process'), (3, 'Ready for inspection'), (4, 'Done')], default=1),
        ),
        migrations.AlterField(
            model_name='section',
            name='state',
            field=models.IntegerField(choices=[(1, 'To do'), (2, 'In process'), (3, 'Ready for inspection'), (4, 'Done')], default=1),
        ),
        migrations.AlterField(
            model_name='task',
            name='state',
            field=models.IntegerField(choices=[(1, 'To do'), (2, 'In process'), (3, 'Ready for inspection'), (4, 'Done')], default=1),
        ),
        migrations.DeleteModel(
            name='StateModel',
        ),
    ]