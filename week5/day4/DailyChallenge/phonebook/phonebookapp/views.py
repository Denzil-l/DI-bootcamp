from django.shortcuts import render, redirect, reverse
from .models import Person
from .forms import PersonForm

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


from django.shortcuts import render, redirect
from .forms import PersonForm

def person_form(request):
    if request.method == 'POST':
        form = PersonForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            phone_number = form.cleaned_data['phone_number']
            if name or phone_number:
                if name:
                    return redirect(f'/persons/name/{name}')
                elif phone_number:
                    return redirect(f'/persons/phonenumber/{phone_number}')
            else:
                form.add_error(None, "Please provide either a name or a phone number.")
    else:
        form = PersonForm()
    
    context = {'form': form}
    return render(request, 'search.html', context)