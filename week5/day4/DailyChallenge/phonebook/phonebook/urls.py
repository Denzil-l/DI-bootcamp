
from django.contrib import admin
from django.urls import path
from phonebookapp.views import search_person, name, phone

urlpatterns = [
    path('admin/', admin.site.urls),
    path('persons/search', search_person, name = 'search_person'),
    path('persons/phonenumber/<str:phone_number>/', phone, name = 'person_by_phone'),
    path('persons/name/<str:fullname>/', name, name = 'person_by_name')

]
