from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def posts(request):
    some_text = 'This is a text'
    

    return render(request, 'posts.html',{})