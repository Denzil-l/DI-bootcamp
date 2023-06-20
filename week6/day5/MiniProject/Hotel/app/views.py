from django.shortcuts import render,redirect
from .forms import SignUpForm, CustomLoginForm
from django.views.generic import CreateView,ListView, DeleteView
from django.contrib.auth.models import User
from .models import Hotel, Dates, Booking,Question,Review, Answer
from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView
from .forms import BookingForm,QuestionForm, ReviewForm, SuperUserBookingForm
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin


class SignUp(CreateView):
    model = User
    form_class = SignUpForm
    template_name = 'account/signup.html'
    success_url = reverse_lazy('login')

class CustomLoginView(LoginView):
    form_class = CustomLoginForm
    template_name = 'account/login.html'
    success_url = reverse_lazy('homepage')

class HomeView(ListView):
    model = Hotel
    template_name = 'homepage.html'
    context_object_name = 'hotel'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['reviews'] = Review.objects.all()
        return context

class ScheduleView(ListView):
    model = Dates
    template_name = 'user/schedule.html'
    context_object_name = 'dates'  

class BookingView(CreateView):
    form_class = BookingForm
    model = Booking
    template_name = 'user/booking.html'
    success_url = '/home'
    
    def get_initial(self):
        data = self.request.GET
        date_id = data.get('date_id',None)
        print(date_id)
        if date_id is not None:
            date_id = int(date_id)
            print(date_id)

            date = Dates.objects.get(id = date_id)
            return{'date':date}
        else: 
            return{}

    def form_valid(self, form):
        date = form.cleaned_data['date']
        date.available = False
        date.save()
        
        form.instance.user = self.request.user
        return super().form_valid(form)
    
class SuperUserBookingView(CreateView):
    form_class = SuperUserBookingForm
    model = Booking
    template_name = 'user/booking.html'
    success_url = '/home'
    
    def get_initial(self):
        data = self.request.GET
        date_id = data.get('date_id',None)
        print(date_id)
        if date_id is not None:
            date_id = int(date_id)
            print(date_id)

            date = Dates.objects.get(id = date_id)
            return{'date':date}
        else: 
            return{}

    def form_valid(self, form):
        date = form.cleaned_data['date']
        date.available = False
        date.save()
        
        form.instance.user = self.request.user
        return super().form_valid(form)
    
class QuestionView(LoginRequiredMixin, CreateView):
    model = Question
    template_name = 'user/question.html'
    fields = ['question']
    success_url = reverse_lazy('homepage')
    def form_valid(self, form):
        form.instance.user = self.request.user  # Установка пользователя
        return super().form_valid(form)
  
class ReviewView(LoginRequiredMixin, CreateView):
    model = Review
    template_name = 'user/review.html'
    fields = ['visit_dates','description']
    success_url = reverse_lazy('homepage')
    def get_form(self, form_class=None):
        form = super().get_form(form_class)
        form.fields['visit_dates'].queryset = Booking.objects.filter(user=self.request.user)
        return form
    def form_valid(self, form):
        form.instance.user = self.request.user  # Установка пользователя
        return super().form_valid(form)

class DeleteReviewView(UserPassesTestMixin, DeleteView):
    model = Review
    success_url = reverse_lazy('homepage')  # Перенаправление на вашу homepage страницу после удаления отзыва

    def test_func(self):
        return self.request.user.is_superuser

class DeleteBookingView(UserPassesTestMixin, DeleteView):
    model = Booking
    success_url = reverse_lazy('schedule')  

    def test_func(self):
        return self.request.user.is_superuser
    def form_valid(self, form):
        booking = self.get_object()
        date = booking.date

        date.available = True
        date.save()
        booking.delete()

        return redirect('schedule')
    # def delete(self, request, *args, **kwargs):
            
class SuperUserScheduleView(ListView):
    model = User
    template_name = 'superuser/super-schedule.html'
    context_object_name = 'users'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['dates'] = Dates.objects.all()
        context['books'] = Booking.objects.all()
        context['questions'] = Question.objects.all()
        return context

class AnswerView(CreateView):
    model = Answer
    fields = ['question','text']
    template_name = 'superuser/answer.html'
    success_url = reverse_lazy('super-schedule')

    def get_initial(self):
        data = self.request.GET
        question_id = data.get('question_id',None)
        if question_id is not None:
            question_id = int(question_id)
            date = Question.objects.get(id = question_id)
            return{'question':date}
        else: 
            return{}

class UserAnswerView(ListView):
    model = Answer
    context_object_name = 'answers'
    template_name = 'user/myanswer.html'

