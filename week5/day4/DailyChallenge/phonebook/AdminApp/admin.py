from django.contrib import admin
from .models import PersonAdmin
from phonebookapp.models import Person
# Register your models here.
admin.site.register(Person)
admin.site.register(PersonAdmin)