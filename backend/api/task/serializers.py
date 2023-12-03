from api.user.serializers import UserSerializer

from rest_framework import serializers

from .models import Section,SectionMember, SectionState, Task, TaskState, Task, Todo

class SectionStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = SectionState
        fields = ('slug', 'name')


class SectionStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = SectionState
        fields = ('slug', 'name')

class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ('title', 'description', 'task', 'created_at', 'updated_at', 'completed_at')
class TaskStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskState
        fields = ('slug', 'name')   
class TaskSerializer(serializers.HyperlinkedModelSerializer):
    state = serializers.ChoiceField(choices = TaskState.choices)
    assignee = UserSerializer()
    assignor = UserSerializer()

    tasks = TodoSerializer(many=True, source='task_set')

    class Meta:
        model = Task
        fields = ('title', 'description', 'section', 'priority','weight', 'points', 'state',
                  'project', 'assignor', 'assignee', 'tasks', 'created_at',
                  'updated_at', 'completed_at')

class SectionMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = SectionMember
        fields= '__all__'
class SectionSerializer(serializers.HyperlinkedModelSerializer):
    state = serializers.ChoiceField(choices = SectionState.choices)
    section_leader = UserSerializer()
    members = SectionMemberSerializer(many= True)
    tasks= TaskSerializer(many = True, source='section_set')
    class Meta:
        model = Section
        fields = ('title', 'description','weight', 'priority', 'state', 'section_leader','members','tasks',
                  'project','created_at', 'updated_at', 'completed_at')

