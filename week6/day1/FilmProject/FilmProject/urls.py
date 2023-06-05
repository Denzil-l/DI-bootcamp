
from django.contrib import admin
from django.urls import path
from films.views import HomePageView, FilmCreateView, DirectorCreateView, ReviewCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('homepage/', HomePageView.as_view(), name='homepage'),
    path('addFilm/', FilmCreateView.as_view(), name='addFilm'),
    path('addDirector/', DirectorCreateView.as_view(), name='addDirector'),
    path('addReview/', ReviewCreateView.as_view(), name='addReview'),

]
