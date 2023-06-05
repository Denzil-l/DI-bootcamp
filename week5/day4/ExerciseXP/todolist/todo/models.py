from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=30)
    image = models.URLField()

    def __str__(self):
        return self.name


class ToDo(models.Model):
    title = models.CharField(max_length=30)
    details = models.TextField()
    has_been_done = models.BooleanField(default=False)
    date_creation = models.DateField(auto_now_add=True)
    date_complition = models.DateField(auto_now_add=True)
    dedlain_date = models.DateField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title