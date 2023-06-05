
from django.contrib import admin
from django.urls import path
from phonebookapp.views import phone, name, person_form

urlpatterns = [
    path('admin/', admin.site.urls),
    path('persons/phonenumber/<str:phone_number>/', phone, name = 'person_phone'),
    path('persons/name/<str:fullname>/', name, name = 'person_name'),
    path('search', person_form, name = 'search')
]
