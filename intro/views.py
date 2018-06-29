from django.shortcuts import render


def playlist(request):
    return render(request, 'my_uploads.html')


def search(request):
    return render(request, 'search.html')


def player(request):
    return render(request, 'youtube_player.html')


def rating(request):
    return render(request, 'rating.html')


def updates(request):
    return render(request, 'updates.html')