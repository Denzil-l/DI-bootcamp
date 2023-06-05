from django.contrib import admin
from django.urls import path
from todo.views import add_todo, add_category,display_todo


urlpatterns = [
    path('admin/', admin.site.urls),
    path('todo', add_todo),
    path('category', add_category),
    path('todo-list', display_todo),
]
