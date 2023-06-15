from django import forms
from .models import Person


class PersonSearchForm(forms.Form):
    search_query = forms.CharField(label='Search Query', max_length=255)