
from django.contrib import admin
from django.urls import path
from rent.views import rent_rental, rent_rental_pk, rent_rental_add

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rent/rental/',rent_rental),
    path('rent/rental/<int:pk>',rent_rental_pk),
    path('rent/rental/add',rent_rental_add),
    # path('/rent/customer/<pk>',),
    # path('/rent/customer/',),
    # path('/rent/customer/add',),
    # path('/rent/vehicle/',),
    # path('/rent/vehicle/<pk>',),
    # path('/rent/vehicle/add',),
]
