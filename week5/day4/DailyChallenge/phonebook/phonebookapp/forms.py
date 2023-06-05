from django import forms
from .models import Person
from phonenumber_field.formfields import PhoneNumberField

class PersonForm(forms.Form):
    class Meta:
        name = forms.CharField(max_length=50)
        phone = PhoneNumberField()
        fields = '__all__'
        