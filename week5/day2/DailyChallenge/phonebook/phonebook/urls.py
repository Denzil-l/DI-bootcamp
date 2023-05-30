
from django.contrib import admin
from django.urls import path
from phonebookapp.views import phone, name

urlpatterns = [
    path('admin/', admin.site.urls),
     path('persons/phonenumber/<str:phone_number>/', phone),
    path('persons/name/<str:fullname>/', name)
]
