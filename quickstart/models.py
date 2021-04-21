from django.db import models


class Author(models.Model):
    name = models.TextField(max_length=100, unique=True)


class Book(models.Model):
    name = models.TextField(max_length=100)
    genre = models.TextField(choices=[
        ('sci fi', 'Sci Fi'),
        ('comedy', 'Comedy'),
    ])
    release_date = models.DateField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
