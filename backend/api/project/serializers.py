from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model= Project
        fields = ['id',	'budget', 'budget_spend','title','description',	'created_at',
                  'updated_at',	'completed_at',	'total_points',	'task_count','points_done',
                  'progress','state','starts_at','ends_at','owner_id']
    