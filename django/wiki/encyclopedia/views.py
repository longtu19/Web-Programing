from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse

from . import util

from markdown2 import Markdown
from django import forms
import math

markdowner = Markdown()

class newEncycloForm(forms.Form):
    entry = forms.CharField(label = "Search Encyclopedia")
class Counter():
    count = 0
    def increment(self):
        self.count += 1
        return ''
    def negate(self):
        self.count = -100000
        return ''

def index(request):
    if request.method == "POST":
        form = newEncycloForm(request.POST)
        if form.is_valid():
            entry = form.cleaned_data["entry"]
            entry = entry.lower()
            if entry in util.list_entries():
                return HttpResponseRedirect(reverse("encyclo:page",  args=(entry,)))
            return render(request, "encyclopedia/searchRes.html", {
                "entries": util.list_entries(),
                "form": newEncycloForm(request.POST),
                "keys": entry,
                "count": Counter()

            })
        else:
            return form.errors
            
    return render(request, "encyclopedia/index.html", {
        "entries": util.list_entries(),
        "form": newEncycloForm()
    })
def content(request, title):
    page = util.get_entry(title)
    return render(request, "encyclopedia/entries.html", {
        "title": title.capitalize(),
        "entry": markdowner.convert(page)
    })

