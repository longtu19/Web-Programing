from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse

from . import util

from markdown2 import Markdown
from django import forms
import math
from django.utils.safestring import mark_safe

markdowner = Markdown()

class newEncycloForm(forms.Form):
    entry = forms.CharField(label = "Search Encyclopedia")
class newTitleForm(forms.Form):
    title = forms.CharField(max_length = 100, widget=forms.TextInput(attrs={'class': 'myTitle'}))
class newContentForm(forms.Form):
    content = forms.CharField(widget=forms.Textarea(attrs ={'class': 'myContent'}))
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

def new_page(request):
    if request.method == "POST":
        form1 = newTitleForm(request.POST)
        form2 = newContentForm(request.POST)
        if form1.is_valid() and form2.is_valid():
            title = form1.cleaned_data['title']
            content = form2.cleaned_data['content']
            title = title.lower()
            if title not in util.list_entries():
                util.save_entry(title, content)  
                return HttpResponseRedirect(reverse("encyclo:page", args=(title, )))
            else:
                count = Counter()
                count.increment()
                return render(request, "encyclopedia/newPage.html", {
                "title": newTitleForm(),
                "content": newContentForm(),
                "count": count
            })




        else:
            return render(request, "encyclopedia/newPage.html", {
                "title": newTitleForm(),
                "content": newContentForm()
            })

    return render(request, "encyclopedia/newPage.html", {
        "title": newTitleForm(),
        "content": newContentForm()

    })
def edit(request, title):
    content = util.get_entry(title)
    if request.method == "GET":
        return render(request, "encyclopedia/editPage.html", {
            "title": newTitleForm(initial = {'title': title}),
            "content": newContentForm(initial={'content': content})
        })
    else:
        form2 = newContentForm(request.POST)
        if form2.is_valid():
            newContent = form2.cleaned_data['content']
            util.save_entry(title, newContent)
            return HttpResponseRedirect(reverse("encyclo:page", args=(title, )))
        
        return render(request, "encyclopedia/editPage.html", {
            "title": newTitleForm(initial = {'title': title}),
            "content": newContentForm(initial = {'content': content})

        })
           


