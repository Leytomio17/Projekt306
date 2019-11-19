from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView


class NewsletterEditor(TemplateView):
    template_name = 'newsletter/editor.html'
