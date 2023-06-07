from django.urls import path
from .views import HomePageView, FilmCreateView, DirectorCreateView, ReviewCreateView, FilmDeleteView, FilmDetailView

urlpatterns = [
    path('homepage/', HomePageView.as_view(), name='homepage'),
    path('addFilm/', FilmCreateView.as_view(), name='addFilm'),
    path('deleteFilm/<int:pk>', FilmDeleteView.as_view(), name='deletefilm'),
    path('addDirector/', DirectorCreateView.as_view(), name='addDirector'),
    path('addReview/', ReviewCreateView.as_view(), name='addReview'),
    # path('favouriteFilm/<int:film_id>/', FavoriteFilmView.as_view(), name='favouriteFilm'),
    path('film/<int:pk>/', FilmDetailView.as_view(), name='filmDetail'),


]
