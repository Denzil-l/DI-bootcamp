from django.shortcuts import render, redirect, reverse
from .models import Person
from .forms import PersonSearchForm

def search_person(request):
    if request.method == 'POST':
        form = PersonSearchForm(request.POST)
        if form.is_valid():
            search_query = form.cleaned_data['search_query']
            if search_query.isdigit() or (search_query.startswith('+') and search_query[1:].isdigit()):
                return redirect('person_by_phone', phone_number=search_query)
            else:
                return redirect('person_by_name', fullname=search_query)
    else:
        form = PersonSearchForm()
    return render(request, 'search.html', {'form': form})


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
