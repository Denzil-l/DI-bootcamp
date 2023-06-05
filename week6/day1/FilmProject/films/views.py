from django.shortcuts import render
from django.views import generic
from .forms import FilmForm, DirectorForm, ReviewForm
from .models import Film, Review

class HomePageView (generic.ListView):
    model = Film
    template_name = 'homepage.html'
    context_object_name = 'films'




class FilmCreateView (generic.CreateView):
    template_name = 'film/addFilm.html'
    form_class = FilmForm
    success_url = '/films/homepage'
    
class DirectorCreateView (generic.CreateView):
    template_name = 'director/addDirector.html'
    form_class = DirectorForm
    success_url = '/films/homepage'

class ReviewCreateView(generic.CreateView):
    form_class = ReviewForm
    template_name = 'review/addReview.html'
    success_url = '/films/homepage'