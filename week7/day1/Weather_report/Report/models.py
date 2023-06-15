from django.db import models





class Report(models.Model):

    TYPE_CHOICES = [
        ('sunny', 'Sunny'),
        ('cloudy', 'Cloudy'),
        ('windy', 'Windy'),
        ('rainy', 'Rainy'),
        ('stormy', 'Stormy'),
    ]

    type = models.CharField(max_length=10, choices=TYPE_CHOICES,default='sunny')
    location = models.CharField(max_length=100)
    temperature = models.FloatField()
    created_at = models.DateTimeField(auto_now=True)
    