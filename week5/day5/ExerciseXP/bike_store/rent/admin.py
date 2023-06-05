from django.contrib import admin
from .models import Customer,Vehicle,Vehicle_size,Vehicle_type,Rental,Rental_Rate,RentalStation,Address

admin.site.register(Customer)
admin.site.register(Vehicle)
admin.site.register(Vehicle_size)
admin.site.register(Vehicle_type)
admin.site.register(Rental)
admin.site.register(Rental_Rate)
admin.site.register(RentalStation)
admin.site.register(Address)