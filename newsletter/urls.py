from django.urls import path

import newsletter
from . import views

app_name = 'newsletter'
urlpatterns = [
    path('editor/', views.NewsletterEditor, name='editor'),
]