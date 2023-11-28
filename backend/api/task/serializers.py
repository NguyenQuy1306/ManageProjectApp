from api.user.serializers import UserSerializer

from rest_framework import serializers

from .models import Section,SectionMember, SectionState, Task, TaskState, Task, Todo

class SectionMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = SectionMember
        fields= '__all__'
class SectionSerializer(serializers.HyperlinkedModelSerializer):
    state = serializers.ChoiceField(choices = SectionState.choices)
    section_leader = UserSerializer()
    members = SectionMemberSerializer()
    class Meta:
        model = Section
        fields = ('title', 'description','weight', 'priority', 'state', 'section_leader','members',
                  'project','created_at', 'updated_at', 'completed_at')


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ('title', 'description', 'task', 'created_at', 'updated_at', 'completed_at')
        
class TaskSerializer(serializers.HyperlinkedModelSerializer):
    state = serializers.ChoiceField(choices = TaskState.choices)
    assignee = UserSerializer()
    assignor = UserSerializer()

    tasks = TodoSerializer(many=True, source='task_set')

    class Meta:
        model = Task
        fields = ('title', 'description', 'section', 'priority', 'points', 'state',
                  'project', 'assignor', 'assignee', 'tasks', 'created_at',
                  'updated_at', 'completed_at')

