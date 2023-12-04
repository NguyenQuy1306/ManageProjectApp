from django.shortcuts import render, redirect

from django.contrib.auth import authenticate, login, logout

from .forms import SignupForm

from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .forms import *
from .models import *
from django.shortcuts import get_object_or_404

# Create your views here.

# def dashboard(request):
#     if not request.user.is_authenticated:
#         return redirect('login')

#     return render(request, template_name = 'dashboard.html', context = {'user': request.user})


def login_user(request):
    if 'error' in request.session:
        del request.session['error']

    username = request.POST['username']
    password = request.POST['password']

    user = authenticate(username = username, password = password)

    if user != None:
        login(request, user)
        request.session['username'] = username
        return redirect('/')
    else:
        request.session['error'] = "Username or Password is incorrect"
        return redirect('login')


def loginView(request):
    if 'username' in request.session:
        return redirect('/')
    elif request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(username = username, password = password)
            if user != None:
                login(request, user)
                request.session['username'] = username
                return redirect('/')
            else:
                request.session['error'] = "Username or Password is incorrect"
                return redirect('login')

    else:
        form = LoginForm()

    return render(request, template_name = 'login.html', context = { 'form': form })

def logout_user(request):
    del request.session['username']
    logout(request)
    return redirect('login')


def forgot_password(request):
    del request.session['username']
    logout(request)
    return redirect('login')

def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)

        if form.is_valid():
            form.save()

            return redirect('login')
    else:
        form = SignupForm()

    return render(request, 'registration/signup.html', {
        'form': form
    })

def logout_user(request):
    logout(request)
    return redirect('/login/')