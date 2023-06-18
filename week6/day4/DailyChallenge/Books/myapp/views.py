from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, CreateView, DetailView
from .models import Book,BookReview
from django.contrib.auth.models import User
from .forms import SignUpForm
from django.urls import reverse_lazy, reverse
from django.db import models

class BookSearch(ListView):
    model = Book
    template_name = 'book_search.html'
    context_object_name = 'books'

    
    def get_queryset(self):
        query = self.request.GET.get('query')
        if query:
            return Book.objects.filter(title__icontains=query)
        return super().get_queryset()


class HomeView(ListView):
    model = Book
    template_name = 'home.html'
    context_object_name = 'books'


class SignUpView(CreateView):
    model = User
    form_class = SignUpForm
    template_name = 'registration/register.html'
    success_url = reverse_lazy('home')

class BookDetailView(DetailView):
    model = Book
    template_name = 'book_details.html'
    context_object_name = 'book'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        book = self.get_object()
        reviews = BookReview.objects.filter(associated_book=book)
        context['reviews'] = reviews
        return context  

class BookReviewCreateView(CreateView):
    model = BookReview
    template_name = 'book_review.html'
    fields = ['rating', 'review_text']

    def form_valid(self, form):
        book = Book.objects.get(id=self.kwargs['book_id'])
        form.instance.associated_book = book
        form.instance.user = self.request.user
        return super().form_valid(form)
    def get_success_url(self):
        return reverse('book_details', kwargs={'pk': self.kwargs['book_id']})