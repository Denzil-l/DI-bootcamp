from django.db import models

class Customer(models.Model):
    first_name = models.CharField(max_length=255) 
    last_name = models.CharField(max_length=30)
    email = models.EmailField()
    phone_number = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Vehicle(models.Model):
    vehicle = models.ForeignKey('Vehicle_type',on_delete=models.CASCADE) 
    date_created = models.DateField(auto_now_add=True)
    real_cost = models.IntegerField()
    size = models.ForeignKey('Vehicle_size', on_delete=models.CASCADE) 

    def __str__(self):
        return f'{self.vehicle}'

class Vehicle_type(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return f'{self.name}'

class Vehicle_size(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return f'{self.name}'

class Rental(models.Model):
    rental_date = models.DateField(null=True, blank=True)
    return_date = models.DateField(null=True, blank=True)
    customer = models.ForeignKey('Customer', on_delete=models.CASCADE)
    vehicle = models.ForeignKey('Vehicle', on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.customer}'

class Rental_Rate(models.Model):
    daily_rate = models.FloatField(null=True, blank=True)
    vehicle_type = models.ForeignKey('Vehicle_type', on_delete=models.CASCADE) 
    vehicle_size = models.ForeignKey('Vehicle_size', on_delete=models.CASCADE, default=1) 
    def __str__(self):
        return f'{self.daily_rate} {self.vehicle_type}'
class RentalStation(models.Model):
    name = models.CharField(max_length=255)
    capacity = models.IntegerField()
    address = models.ForeignKey('Address',on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.name}'
class Address(models.Model):
    address = models.CharField(max_length=50)
    address2 = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=50)
    def __str__(self):
        return f'{self.address}'