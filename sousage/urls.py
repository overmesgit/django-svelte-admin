"""sousage URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.http import HttpResponse
from django.urls import include, path, re_path
from rest_framework import routers

from quickstart import views
from quickstart.views import IndexView, DjangoIndexView, DjangoEditView

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'author', views.AuthorViewSet)
router.register(r'book', views.BookViewSet)


def health_check(request):
    return HttpResponse("OK")


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', health_check),
    path('admin/', admin.site.urls),
    path('app/', IndexView.as_view()),
    path('dj/', DjangoIndexView.as_view(), name='book_list'),
    path('dj/edit/<int:pk>/', DjangoEditView.as_view(), name='book_edit'),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'app/.*$', IndexView.as_view()),
]

# TODO: it is only for local dev
urlpatterns += staticfiles_urlpatterns()
