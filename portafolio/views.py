from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def homest_view(request):
    return render(request, 'homest.html')