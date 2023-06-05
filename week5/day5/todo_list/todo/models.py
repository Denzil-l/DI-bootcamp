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
    date_complition = models.DateField(null=True, blank=True)
    deadlain_date = models.DateField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='todos')

    def __str__(self):
        return f'{self.title} {self.category.name}'