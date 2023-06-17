
from django.contrib import admin
from django.urls import path
from rent.views import rent_rental, rent_rental_pk, rent_rental_add, rent_customer_pk, rent_customer, rent_customer_add, rent_vehicle, rent_vehicle_pk, rent_vehicle_add

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rent/rental/',rent_rental),
    path('rent/rental/<int:pk>',rent_rental_pk),
    path('rent/rental/add',rent_rental_add),
    path('rent/customer/<int:pk>',rent_customer_pk),
    path('rent/customer/',rent_customer, name='customer-list'),
    path('rent/customer/add',rent_customer_add),
    path('rent/vehicle/',rent_vehicle),
    path('rent/vehicle/<int:pk>',rent_vehicle_pk),
    path('rent/vehicle/add',rent_vehicle_add,name='vehicle-list'),
]
