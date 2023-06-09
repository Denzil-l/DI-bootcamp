from django.urls import path
from .views import HomePageView, FilmCreateView, DirectorCreateView, ReviewCreateView, FilmDeleteView, FilmDetailView,add_to_favorites,remove_from_favorites

urlpatterns = [
    path('homepage/', HomePageView.as_view(), name='homepage'),
    path('addFilm/', FilmCreateView.as_view(), name='addFilm'),
    path('deleteFilm/<int:pk>', FilmDeleteView.as_view(), name='deletefilm'),
    path('addDirector/', DirectorCreateView.as_view(), name='addDirector'),
    path('addReview/', ReviewCreateView.as_view(), name='addReview'),
    path('add_to_favorites/<int:film_id>/', add_to_favorites, name='add_to_favorites'),
    path('remove_from_favorites/<int:film_id>/', add_to_favorites, name='remove_from_favorites'),
    path('film/<int:pk>/', FilmDetailView.as_view(), name='filmDetail'),


]
