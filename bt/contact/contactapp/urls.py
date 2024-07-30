# myapp/urls.py
from django.urls import path
from .views import welcome,myshare

urlpatterns = [
   path('welcome',welcome),
    path('share/<int:nameid>',myshare)
]
