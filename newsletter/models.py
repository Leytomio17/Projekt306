from django.db import models
from froala_editor.fields import FroalaField
from django.contrib.auth.models import User


class Post(models.Model):
    poster = models.ForeignKey(User, on_delete=models.PROTECT)
    subject = models.CharField(max_length=200)
    content = FroalaField(theme='dark')
    post_date = models.DateField()