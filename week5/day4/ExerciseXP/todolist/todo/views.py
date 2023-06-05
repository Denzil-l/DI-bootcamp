from django.shortcuts import render,redirect
from .models import Category, ToDo
from .forms import ToDoForm


def todo_view(request):
    if request.method == 'POST':
        form = ToDoForm(request.POST)
        if form.is_valid():
            form.save()
            
            return redirect('display_todos')
    else:
        form = ToDoForm()
    context = {'form' : form}
    return render(request, 'todo.html', context)


def display_todos(request):
    todolist = ToDo.objects.all()
    context = {'todolist' : todolist}
    return render(request, 'todos.html', context)
