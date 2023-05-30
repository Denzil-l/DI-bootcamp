from django.shortcuts import render
from .models import Family
from .models import Animal


def family(request,id):
    all_families = Family.objects.all()
    family = ''
    for i in all_families:
        if id == i.id:
            family = i
    context = {'family' : family}
    
    return render(request,'family.html',context)

def animal(request,id):
    all_animals = Animal.objects.all()
    animal = ''
    for i in all_animals:
        if id == i.id:
            animal = i
    context = {'animal' : animal}
    
    return render(request,'animal.html',context)


def animals(request):
    animals = Animal.objects.all()
    context = {'animals' : animals}
    
    return render(request,'animals.html',context)

