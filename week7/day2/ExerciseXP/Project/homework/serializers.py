from rest_framework import serializers


from rest_framework import serializers
from .models import Department, Employee, Project, Task

class DepartmentSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='department-detail')
    class Meta:
        model = Department
        fields = ['url', 'id', 'name', 'description']


class EmployeeSerializer(serializers.ModelSerializer):
    # url = serializers.HyperlinkedIdentityField(view_name='employee-detail')
    class Meta:
        model = Employee
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    # url = serializers.HyperlinkedIdentityField(view_name='project-detail')
    class Meta:
        model = Project
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        # url = serializers.HyperlinkedIdentityField(view_name='task-detail')
        model = Task
        fields = '__all__'