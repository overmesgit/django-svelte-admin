from time import sleep

from django import forms

from django.contrib.auth.models import User, Group
from django.urls import reverse_lazy
from django.views.generic import TemplateView, ListView, UpdateView
from rest_framework import viewsets, filters
from rest_framework import permissions

from quickstart.models import Book, Author
from quickstart.serializers import UserSerializer, GroupSerializer, AuthorSerializer, BookSerializer
from schema_generator import SchemaGenerator


class IndexView(TemplateView):
    template_name = 'index.html'


class DjangoIndexView(ListView):
    model = Book
    template_name = 'django/index.html'


class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = '__all__'


class DjangoEditView(UpdateView):
    model = Book
    form_class = BookForm
    template_name = 'django/edit.html'
    success_url = reverse_lazy('book_list')


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request, *args, **kwargs):
        sleep(5)
        return super().list(request, *args, **kwargs)


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class AuthorViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = [permissions.IsAuthenticated]


class BookViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [permissions.IsAuthenticated]
    schema = SchemaGenerator()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['name', 'id', 'release_date']
    ordering = ['id']
