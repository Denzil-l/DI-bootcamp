from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from .views import HomeView, SignUpView, BookDetailView,BookReviewCreateView, BookSearch
urlpatterns = [
    path('home',HomeView.as_view(), name='home'),
    path('login/', LoginView.as_view(template_name = 'registration/login.html'), name = 'login'),
    path('logout/', LogoutView.as_view(), name = 'logout'),
    path('signup/', SignUpView.as_view(), name = 'signup'),
    path('book/search/', BookSearch.as_view(), name='book_search'),
    path('book/<int:pk>/', BookDetailView.as_view(), name='book_details'),
    path('book/<int:book_id>/review/', BookReviewCreateView.as_view(), name='write_review')
]

