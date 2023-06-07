from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

class Producer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Country(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Director(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Film(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField(auto_now_add=True)
    created_in_country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name='films')
    available_in_countries = models.ManyToManyField(Country)
    category = models.ManyToManyField(Category)
    director = models.ManyToManyField(Director)
    producers = models.ManyToManyField(Producer)

    def __str__(self):
        return self.title
    
class Review(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    review_text = models.TextField()
    rating = models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])
    review_date = models.DateTimeField(auto_now_add=True)

