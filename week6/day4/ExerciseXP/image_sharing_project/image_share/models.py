from django.db import models
from django.contrib.auth.models import User
class Image(models.Model):
    image = models.ImageField(upload_to='images/',null=True,blank=True)
    title = models.CharField(max_length=50)
    description = models.TextField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    image_number = models.PositiveIntegerField(null=True)

    def __str__(self):
        return f'Profile: {self.user.username}'
