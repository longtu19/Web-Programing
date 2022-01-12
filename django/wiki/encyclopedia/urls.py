from django.urls import path

from . import views

app_name = "encyclo"
urlpatterns = [
    path("", views.index, name="index"),
    path("new", views.new_page, name="new"),
    path("edit<str:title>", views.edit, name = "edit"),
    path("<str:title>", views.content, name="page")
   
    

]
