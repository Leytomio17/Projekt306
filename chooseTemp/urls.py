from django.urls import path

from . import views

app_name = 'chooseTemp'
urlpatterns = [
    path('', views.ChooseTemp, name='chooseTemp'),
]