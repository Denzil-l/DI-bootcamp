from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

def hello(request):
    return render(request, 'polls/hello.html')
def about(request):
    return render(request, 'polls/about.html')