from django.urls import path
from django.contrib.auth.views import LoginView,LogoutView
from .views import homepage,RegisterView, upload_image, OwnImages, ProfileView
urlpatterns = [
   path('',homepage.as_view() ,name = 'homepage'), 
   path('login/', LoginView.as_view(template_name = 'registration/login.html'),name='login'),
   path('logout/', LogoutView.as_view(),name ='logout'),
   path('register/',RegisterView.as_view(),name = 'register'),
   path('upload-image/',upload_image.as_view(),name = 'upload'),
   path('my-image/',OwnImages.as_view(),name = 'OwnImages'),
   path('profile/<int:pk>/', ProfileView.as_view(), name='profile'),

]
