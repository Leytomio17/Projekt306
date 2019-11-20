from django.urls import path

import newsletter
from newsletter.views import make_post
from . import views

app_name = 'newsletter'
urlpatterns = [
    path('editor/', views.NewsletterEditor, name='editor'),
    path('', make_post, name='get_post'),

]
