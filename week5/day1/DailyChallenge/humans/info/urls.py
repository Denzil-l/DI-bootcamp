from django.urls import path
from . import views

urlpatterns = [
        path('people', views.peoples),
        path('people/<int:id>', views.person),
]