from django.shortcuts import render

from . import util

from markdown2 import Markdown

markdowner = Markdown()


def index(request):
    return render(request, "encyclopedia/index.html", {
        "entries": util.list_entries()
    })
def content(request, title):
    page = util.get_entry(title)
    return render(request, "encyclopedia/entries.html", {
        "title": title.capitalize(),
        "entry": markdowner.convert(page)
    })

