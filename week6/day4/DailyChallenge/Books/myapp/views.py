from django.shortcuts import render
from django.views.generic import ListView, CreateView
from .models import Book,BookReview
from django.contrib.auth.models import User
from .forms import SignUpForm
from django.urls import reverse_lazy


class HomeView(ListView):
    model = BookReview
    template_name = 'home.html'
    context_object_name = 'context'


class SignUpView(CreateView):
    model = User
    form_class = SignUpForm
    template_name = 'registration/register.html'
    success_url = reverse_lazy('home')