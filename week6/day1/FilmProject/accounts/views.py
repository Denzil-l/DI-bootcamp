from django.shortcuts import render,redirect
from django.views.generic.edit import CreateView
from .forms import SignUpForm
from .models import UserProfile
from django.urls import reverse_lazy
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from django.contrib.auth.decorators import login_required

# @login_required
# def create_user_profile(request):
#     try:
#         profile = request.user.user_profile
#     except User.DoesNotExist:
#         profile = User(user=request.user)
#         profile.save()
    
#     return redirect('films:homepage')

class SignUp(CreateView):
    form_class = SignUpForm
    model = User
    template_name = 'signup.html'
    success_url = reverse_lazy('login')

    def form_valid(self, form):
            response = super().form_valid(form)
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            if user is not None:
                login(self.request, user)
            return response


def ProfileView(request, id):
    users = User.objects.all()
    context = {}
    for user in users:
        print(user.id)
        if user.id == id:
            context = {'user' : user}
            break
    return render(request,'profile.html',context)


