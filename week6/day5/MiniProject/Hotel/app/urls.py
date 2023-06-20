from django.urls import path
from django.contrib.auth.views import LogoutView
from .views import SignUp, CustomLoginView, HomeView, ScheduleView, BookingView, QuestionView, ReviewView, DeleteReviewView, SuperUserScheduleView,AnswerView,UserAnswerView,DeleteBookingView, SuperUserBookingView
urlpatterns = [
    
    path('home/',HomeView.as_view(),name='homepage'),
    path('login/',CustomLoginView.as_view(),name='login'),
    path('logout/',LogoutView.as_view(),name='logout'),
    path('signup/',SignUp.as_view(),name='signup'),
    path('user/schedule',ScheduleView.as_view(),name='schedule'),
    path('booking/', BookingView.as_view(), name='booking'),
    path('question/', QuestionView.as_view(), name='question'),
    path('review/', ReviewView.as_view(), name='review'),
    path('myanswers/', UserAnswerView.as_view(), name='myanswers'),
    path('review/delete/<int:pk>/', DeleteReviewView.as_view(), name='delete_review'),
    path('schedule/delete/<int:pk>/', DeleteBookingView.as_view(), name='delete_date'),
    path('superuser/schedule', SuperUserScheduleView.as_view(), name='super-schedule'),
    path('superuser/answer', AnswerView.as_view(), name='answer'),
    path('superuser/booking', SuperUserBookingView.as_view(), name='superbooking'),

]
