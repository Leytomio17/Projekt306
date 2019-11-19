from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView


class ChooseTemp(TemplateView):
    template_name = 'chooseTemp/chooseTemp.html'

