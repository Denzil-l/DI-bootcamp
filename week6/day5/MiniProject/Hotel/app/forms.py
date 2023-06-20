from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm
from .models import Booking, Dates, Question, Review

class SignUpForm(UserCreationForm):
    model = User
    fields = ['username','first_name','last_name','password1','password2']


    username = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Password'}))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Password confirmation'}))
    first_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder':'First name'}))
    lasst_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder':'Last name'}))
    email = forms.EmailField(required=True, max_length=254, widget=forms.EmailInput(attrs={'placeholder': 'Email'}))

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for fieldname in self.fields:
            self.fields[fieldname].help_text = None
            self.fields[fieldname].label = ''

class CustomLoginForm(AuthenticationForm):
    username = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Username'}),
        label=''
    )
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'placeholder': 'Password'}),
        label=''
    )

class BookingForm(forms.ModelForm):
    date = forms.ModelChoiceField(queryset=Dates.objects.filter(available=True))

    class Meta:
        model = Booking
        fields = ['date']

class SuperUserBookingForm(forms.ModelForm):
    

    class Meta:
        model = Booking
        fields = ['user','date']


class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = ['question']

class ReviewForm(forms.ModelForm):
    visit_dates = forms.ModelMultipleChoiceField(queryset=None)

    def __init__(self, *args, **kwargs):
        user = kwargs.pop('user', None)
        super().__init__(*args, **kwargs)
        self.fields['visit_dates'].queryset = Booking.objects.filter(user=user)

    class Meta:
        model = Review
        fields = ['visit_dates', 'description']
