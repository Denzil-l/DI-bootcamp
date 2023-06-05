import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_store.settings')
import django
django.setup()
from rent.models import Rental, Customer, Vehicle
from faker import Faker
import random
fake = Faker(locale=['en_US', 'it_IT', 'fr_FR'])
import datetime
def create_rentals(number:int):
    list_used_id = []
    for _ in range(number):
        current_date = datetime.date.today()
        rental_date = fake.date()
        rental_dateX = ''
        randomium = random.randint(0, 10)
        if randomium == 0:
            return_date = None
        else:
            return_date = fake.date()
        while True:
            rental_date = rental_date.split('-')
            rental_date = datetime.date(int(rental_date[0]), int(rental_date[1]), int(rental_date[2]))
            rental_dateX = rental_date
            if rental_date > current_date:
                rental_date = fake.date()
            else:
                rental_date = str(rental_date)
                break
        if return_date != None:
            while True:
                return_date = return_date.split('-')
                return_date = datetime.date(int(return_date[0]), int(return_date[1]), int(return_date[2]))
                if return_date < current_date and return_date > rental_dateX:
                    return_date = fake.date()
                else:
                    return_date = str(return_date)
                    break
        customer = Customer.objects.order_by('?').first()
        vehicle = Vehicle.objects.order_by('?').first()
        print(customer.id)
        print(vehicle.id)
        while True:
            if vehicle.id in list_used_id:
                vehicle = Vehicle.objects.order_by('?').first
            else:
                break
                
            
            
        rental = Rental(
                rental_date = rental_date,
                return_date = return_date,
                customer = customer,
                vehicle = vehicle
                            )
        rental.save()


create_rentals(100)
