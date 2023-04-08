from pytube import YouTube
from model import *
def yt_model():
    VIDEO_URL = "https://www.youtube.com/watch?v=hWLf6JFbZoo"
    yt = YouTube(VIDEO_URL)
    yt.streams.filter(only_audio = True, file_extension = 'mp4').first().download(filename = './test_docs/video.mp4') 
    res = summarize_text_model()    
    return res