from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile, Image

@receiver(post_save,sender=User)
def create_profile(sender,instance,created,**kwargs):
    if created:
        Profile.objects.create(user = instance)


@receiver(post_save,sender=Image)
def create_profile(sender,instance,created,**kwargs):
    if created:
        user = instance.user
        profile = Profile.objects.get(user=user)
        profile.image_number = Image.objects.filter(user=user).count()
        profile.save()