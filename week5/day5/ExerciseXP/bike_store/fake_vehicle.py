import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_store.settings')
import django
django.setup()
from rent.models import Vehicle, Vehicle_size, Vehicle_type
from faker import Faker
from random import random
fake = Faker(locale=['en_US', 'it_IT', 'fr_FR'])
import datetime
def create_vehicle(number:int):

    for _ in range(number):
       
        vehicle_type = Vehicle_type.objects.order_by('?').first()
        vehicle_size = Vehicle_size.objects.order_by('?').first()     
        real_cost = round(random()*1000,2)
        vehicles = Vehicle(
                vehicle = vehicle_type,
                size = vehicle_size,
                real_cost = real_cost,
                            )
        vehicles.save()

    print(f"CREATED {number} vehicle")

create_vehicle(100)
