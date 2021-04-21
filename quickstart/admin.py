from django.contrib import admin

# Register your models here.
from quickstart.models import Book, Author

admin.site.register(Book)
admin.site.register(Author)
