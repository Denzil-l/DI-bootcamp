from django.shortcuts import render, get_object_or_404
from .models import Person

def phone(request,phone_number):
    people = Person.objects.all()
    person =''
    for i in people:
        if phone_number == i.phone_number:
            person = i
            break
    context = {'person' : person}
    return render(request,'phone.html',context)
def name(request,fullname):
    people = Person.objects.all()
    person =''
    for i in people:
        if fullname == i.name:
            person = i
            break
    context = {'person' : person}
    return render(request,'name.html',context)
