from .models import Category,ToDo
from django import forms
class ToDoForm(forms.ModelForm):
    class Meta:
        model = ToDo
        fields = ('title','details','deadlain_date','category')
        deadlain_date = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}))

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = "__all__"

class DoneForm(forms.Form):
    instance = forms.ModelChoiceField(queryset=ToDo.objects.all())