from django.shortcuts import render
from django.http import  HttpResponse

# Create your views here.

def home(request):
    #add path relative to templates directory in app
    return render(request, "main/index.html")
