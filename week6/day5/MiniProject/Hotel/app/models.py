from django.db import models
from django.contrib.auth.models import User
class Hotel(models.Model):
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    description = models.TextField()
    def __str__(self):
        return str(self.name)

class Dates(models.Model):
    date = models.DateField(unique=True)
    available = models.BooleanField(default=True)
    def __str__(self):
        return str(self.date)
    

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.ForeignKey(Dates, on_delete=models.CASCADE, related_name='bookings')

    def __str__(self):
        return f"{self.user.username} - {self.date}"

class Question(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.TextField()

    def __str__(self):
        return f"Question #{self.pk}: {self.user}"
class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    visit_dates = models.ManyToManyField(Booking)
    description = models.TextField()

    def __str__(self):
        return f"Review #{self.pk}: {self.user.username}"

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.TextField()
    def __str__(self):
        return f"Answer for user: {self.question.user.username}"
