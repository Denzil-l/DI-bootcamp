from django.shortcuts import render
from .models import Category, ToDo
from .forms import CategoryForm,ToDoForm,DoneForm
import datetime

def add_todo(request):

    #POST

    if request.method == 'POST':
        form_field = ToDoForm(request.POST)
        if form_field.is_valid():
            form_field.save()
        else:
            print(form_field.errors)
    #GET
    form = ToDoForm()
    context = {'form': form}
    return render(request, 'todo.html',context)
def add_category(request):

    if request.method == 'POST':
            form_field = CategoryForm(request.POST)
            if form_field.is_valid():
                form_field.save()
            else:
                print(form_field.errors)
    #GET
    form = CategoryForm()
    context = {'form': form}
    return render(request, 'category.html',context)
def display_todo(request):

    if request.method == 'POST':
            data = (request.POST)
            todo = ToDo.objects.get(id = data['instance'])
            todo.has_been_done = True
            todo.date_complition = datetime.today()
            todo.save()
    #GET
    done = DoneForm()
    todo_list = ToDo.objects.all()
    todo_forms = []
    for todo in todo_list:
        form = DoneForm(initial={'instance': todo})
        todo_forms.append((todo,form))

    
    context = {'todo_list': todo_forms}
    return render(request, 'todo-list.html',context)