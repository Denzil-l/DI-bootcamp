from django.shortcuts import render
from .models import Category
from .forms import CategoryForm

def add_category_view(request):
    # print("GET DATA: " + request.GET)
    # name = request.GET['name']

    if request.method == 'POST':
        data = request.POST
        filled_form = CategoryForm(data)
        filled_form.save()
        print("POST: ",data)
    elif request.method == 'GET':
        pass

    category_form = CategoryForm()
    context = {'form': category_form}
    return render(request,'add_category.html',context)
