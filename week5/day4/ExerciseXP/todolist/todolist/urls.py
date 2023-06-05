
from django.contrib import admin
from django.urls import path
from todo.views import todo_view,display_todos

urlpatterns = [
    path('admin/', admin.site.urls),
    path('todo', todo_view),
    path('todos', display_todos,name='display_todos'),
]
