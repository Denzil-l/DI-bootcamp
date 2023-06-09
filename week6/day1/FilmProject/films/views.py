from django.shortcuts import render,redirect, get_object_or_404
from django.views import generic
from django.urls import reverse_lazy
from .forms import FilmForm, DirectorForm, ReviewForm,ProducerFormSet
from .models import Film, Review
from accounts.models import UserProfile
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib.auth.mixins import (LoginRequiredMixin,
                                        UserPassesTestMixin,
                                        PermissionRequiredMixin)


from accounts.models import User


@login_required
def add_to_favorites(request,film_id):
    film = get_object_or_404(Film,id = film_id)
    user_profile = UserProfile.objects.get(user = request.user)
    user_profile.favorite_films.add(film)
    return redirect(reverse_lazy('homepage'))
@login_required
def remove_from_favorites(request,film_id):
    film = get_object_or_404(Film,id = film_id)
    user_profile = UserProfile.objects.get(user = request.user)
    user_profile.favorite_films.remove(film)
    return redirect(reverse_lazy('homepage'))

class HomePageView (generic.ListView):
    model = Film
    template_name = 'homepage.html'
    context_object_name = 'films'

class FilmCreateView (PermissionRequiredMixin, generic.CreateView):
    template_name = 'film/addFilm.html'
    form_class = FilmForm
    success_url = '/films/homepage'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if self.request.POST:
            context['formset'] = ProducerFormSet(self.request.POST)
        else:
            context['formset'] = ProducerFormSet()
        return context
    
    def post(self, request, *args, **kwargs):
        form = self.get_form()
        formset = ProducerFormSet(request.POST)

        if form.is_valid() and formset.is_valid():
            return self.form_valid(form, formset)
        else:
            return self.form_invalid(form, formset)

    def form_valid(self, form, formset):
        self.object = form.save()
        formset.instance = self.object
        formset.save()
        return HttpResponseRedirect(self.get_success_url())

    def form_invalid(self, form, formset):
        return self.render_to_response(
            self.get_context_data(form=form, formset=formset)
        )

    permission_required = ('films.add_film')
class DirectorCreateView (PermissionRequiredMixin, generic.CreateView):
    template_name = 'director/addDirector.html'
    form_class = DirectorForm
    success_url = '/films/homepage'

    permission_required = ('films.add_director')
class ReviewCreateView( generic.CreateView):
    form_class = ReviewForm
    template_name = 'review/addReview.html'
    success_url = '/films/homepage'

class FilmDeleteView(UserPassesTestMixin,SuccessMessageMixin, generic.DeleteView):
    model = Film
    template_name = 'film/confirm_delete.html'
    success_url = '/films/homepage'
    success_message = "Film was deleted"
    def test_func(self):
        if self.request.user.is_superuser:
            return True
        else:
            return False
   
class FilmDetailView (generic.DetailView):
    model = Film
    template_name = 'film/filmDetail.html'
    context_object_name = 'film'

