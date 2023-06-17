
from django.contrib import admin
from django.urls import path
from phonebookapp.views import search_person, name, phone
from AdminApp.views import admin_search
urlpatterns = [
    path('admin/', admin.site.urls),
    path('persons/admin', admin_search, name = 'admin_search'),
    path('persons/search', search_person, name = 'search_person'),
    path('persons/phonenumber/<str:phone_number>/', phone, name = 'person_by_phone'),
    path('persons/name/<str:fullname>/', name, name = 'person_by_name')

]
