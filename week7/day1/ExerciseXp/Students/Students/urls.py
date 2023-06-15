
from django.contrib import admin
from django.urls import path, include
from student.views import StudentListView,StudentDetailView, student_list
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/students-mixin/', StudentListView.as_view(), name = 'mixin-list'),
    path('api/students/', student_list.as_view(), name = 'list'),
    path('api/students/<int:pk>', StudentDetailView.as_view(), name = 'detail'),

]
