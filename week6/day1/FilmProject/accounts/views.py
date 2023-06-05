from django.shortcuts import render
from django.views.generic.edit import CreateView
from .forms import SignUpForm
from django.urls import reverse_lazy
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class SignUp(CreateView):
    form_class = SignUpForm
    model = User
    template_name = 'signup.html'
    success_url = reverse_lazy('login')



def ProfileView(request, id):
    users = User.objects.all()
    context = {}
    for user in users:
        if user.id == id:
            context = {'user' : user}
            break
    return render(request,'profile.html',context)