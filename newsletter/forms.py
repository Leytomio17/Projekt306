from django import forms
from froala_editor.widgets import FroalaEditor
from .models import Post


class PageForm(forms.ModelForm):
    content = forms.CharField(widget=FroalaEditor)

    class Meta:
        model = Post
        fields = ('subject', 'content')
