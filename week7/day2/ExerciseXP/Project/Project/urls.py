
from django.contrib import admin
from django.urls import path, include
from homework.views import DepartmentCreateAPIView,DepartmentListAPIView,EmployeeCreateAPIView,EmployeeListAPIView,ProjectDestroyAPIView,ProjectRetriveAPIView,ProjectUpdateAPIView, TaskDestroyAPIView, TaskRetriveAPIView, TaskUpdateAPIView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('department-detail', DepartmentListAPIView.as_view(), name='department-detail'),
    path('department-create', DepartmentCreateAPIView.as_view(), name='department_create'),
    path('employee-list', EmployeeListAPIView.as_view(), name='employee_list'),
    path('employee-create/<int:pk>/', EmployeeCreateAPIView.as_view(), name='employee_create'),
    path('project-retrive/<int:pk>/', ProjectRetriveAPIView.as_view(), name='project_retrive'),
    path('project-upload/<int:pk>/', ProjectUpdateAPIView.as_view(), name='project_upload'),
    path('project-destroy/<int:pk>/delete', ProjectDestroyAPIView.as_view(), name='project_destroy'),
    path('task-retrive/<int:pk>/', TaskRetriveAPIView.as_view(), name='task_retrive'),
    path('task-upload/<int:pk>/', TaskUpdateAPIView.as_view(), name='task_upload'),
    path('task-destroy/<int:pk>/delete', TaskDestroyAPIView.as_view(), name='task_destroy'),
]
