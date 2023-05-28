from django.contrib import admin
from django.urls import path
from polls.views import posts


urlpatterns = [
    path('mysite_top', posts, name='home'),
]
