from rest_framework import serializers
from .models import Project, ProjectMember

class ProjectMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectMember
        fields= ['id, salary, bio, working_hours_day, role, status, project_id, user_id']
        

class ProjectSerializer(serializers.ModelSerializer):
    members = ProjectMemberSerializer(many=True, read_only=True)
    class Meta:
        model= Project
        fields = ['id',	'budget', 'budget_spend','title','description',	'created_at',
                  'updated_at',	'completed_at',	'total_points',	'task_count','points_done',
                  'progress','state','starts_at','ends_at','owner', 'members']
        read_only_fields = ['created_at', 'updated_at', 'completed_at', 'total_points', 'task_count', 'points_done']