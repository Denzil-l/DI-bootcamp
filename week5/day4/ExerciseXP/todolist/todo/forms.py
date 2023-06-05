from django import forms
from .models import Category, ToDo


class ToDoForm(forms.ModelForm):
    class Meta:
        model = ToDo
        fields = ('title', 'details', 'dedlain_date', 'category')