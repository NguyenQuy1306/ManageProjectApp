from django.shortcuts import render

# Create your views here.
def homepage(request, *args, **kwargs):
    return render(request, 'pages/home.html', context = {}, status= 200)
