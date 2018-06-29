from django.conf.urls import url
from . import views

app_name = 'intro'


urlpatterns = [
    url(r'^playlist', views.playlist, name='playlist'),
    url(r'^search', views.search, name='search'),
    url(r'^player', views.player, name='player'),
    url(r'^rating', views.rating, name='rating'),
    url(r'^updates', views.updates, name='updates'),
]