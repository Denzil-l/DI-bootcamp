from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Person(models.Model):
    name = models.TextField()
    email = models.TextField()
    phone_number = PhoneNumberField()
    address = models.TextField()

