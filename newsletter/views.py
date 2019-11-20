from django.contrib.auth.decorators import login_required
from django.shortcuts import render

# Create your views here.
from django.utils.timezone import now
from django.views.generic import TemplateView

from newsletter.forms import PageForm


class NewsletterEditor(TemplateView):
    template_name = 'newsletter/editor.html'


@login_required()
def make_post(request):
    form = PageForm
    if request.method == 'POST':
        form = PageForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.poster = request.user
            post.post_date = now()
            post.save()
            form = PageForm
    return render(request, 'base.html', {'form': form, })
