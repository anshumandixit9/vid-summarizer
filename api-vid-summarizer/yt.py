from pytube import YouTube
from model import *
def yt_model(youtubeLink):
    print(youtubeLink)
    VIDEO_URL = youtubeLink
    yt = YouTube(VIDEO_URL)
    yt.streams.filter(only_audio = True, file_extension = 'mp4').first().download(filename = './test_docs/video.mp4') 
    res = summarize_text_model()    
    return res