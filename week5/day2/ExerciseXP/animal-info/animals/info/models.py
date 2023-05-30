from django.db import models

class Animal(models.Model):
    legs = models.IntegerField(max_length=10)
    weight = models.IntegerField()
    height = models.IntegerField()
    speed = models.IntegerField()
    family = models.ForeignKey('Family',on_delete=models.SET_NULL, null=True)


class Family(models.Model):
    name = models.CharField(max_length=30)
 


# families:
# mammal
# reptile
# insect
# arachnid
# amphibian
# etc.

# python manage.py makemigrations - commit changes 
# python manage.py migrate - push changes


# -------------SINGLE INSTANCE-------------
# from polls.models import Post
# post1 = Post(title='First Post', content='test content', author='Joe')
# post1.save()
# post1.title = '1st Post'
# post1.delete()

# -------------Multiple INSTANCES-------------
# Post.objects.all() - returns all rows/objects
# Post.objects.last() - returns the last object
# Post.objects.first() - returns the first object

# Post.objects.all().order_by('author')

# get
# Post.objects.get(author='Adam') - returns single object

# filter
# Post.objects.filter(author='Joe') - returns multiple objects

# --------------Related model creation-----------
# category_science = Category(name='Science')
# category_science.save()
# post_science = Post(title='Mars', content='bla bla', author='Ben', category=category_science)
# post_science.save()