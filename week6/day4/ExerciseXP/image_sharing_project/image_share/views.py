from django.shortcuts import render
from django.views.generic import ListView, CreateView, DetailView
from django.contrib.auth.models import User
from .forms import RegisterForm, ImageForm
from.models import Profile, Image
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin


class homepage(ListView):
    model = Image
    template_name = 'image_share/index.html'
    context_object_name = 'images'

class RegisterView(CreateView):
    model = User
    form_class = RegisterForm
    template_name = 'registration/register.html'
    success_url = reverse_lazy('homepage')

class upload_image(LoginRequiredMixin,CreateView):
    model = Image
    form_class = ImageForm
    template_name = 'image_share/upload_image.html'
    success_url = reverse_lazy('homepage')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)
    
class OwnImages(ListView):
    model = Image
    template_name = 'image_share/my_images.html'
    context_object_name = 'images'

class ProfileView(DetailView):
    model = Profile
    template_name = 'image_share/profile.html'
    context_object_name = 'profile'

