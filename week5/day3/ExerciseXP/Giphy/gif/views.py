from django.shortcuts import render
from .models import Category
from .forms import CategoryForm, GifForm

def add_category_view(request):
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

def add_gif(request):
    if request.method == 'POST':
        form = GifForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = GifForm()
    return render(request, 'add_gif.html', {'form': form})