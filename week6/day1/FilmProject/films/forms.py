from django import forms
from .models import Film,Director, Review,Producer

class FilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = '__all__'
class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'
class ReviewForm(forms.ModelForm):
     class Meta:
        model = Review
        fields = '__all__'
       
class ProducerForm(forms.ModelForm):
    class Meta:
        model = Producer
        fields ='__all__'

ProducerFormSet = forms.modelformset_factory(model=Producer,
                                             form=ProducerForm,
                                             extra=0)
