from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import BookReview, Book
from django.db import models

@receiver(post_save, sender=BookReview)
def update_book_average_rating(sender, instance, created, **kwargs):
    print("ЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧЧ")

    book = instance.associated_book
    reviews = BookReview.objects.filter(associated_book=book)
    average_rating = reviews.aggregate(models.Avg('rating'))['rating__avg']
    book.average_rating = average_rating
    book.save()