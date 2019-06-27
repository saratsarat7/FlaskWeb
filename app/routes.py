from flask import render_template
from flask import Flask, redirect, url_for, request
from app import app

import sys
import os
sys.path.append(os.path.abspath("/media/sarat/Sarat/Development/Python/Flask WebPage/app"))
from GoogleApi import *

from gtts import gTTS

@app.route('/')
@app.route('/index')
def index():
    # user = {'username': 'Sarat'}
    # return render_template('index.html', title='Home', user=user)
    return render_template('index.html', title='Home')

@app.route('/SpeechApi',methods = ['GET','POST'])
def page():
    data = ""
    if request.method == 'POST':
        field_name = request.form['field_name']
        tts = gTTS(text=field_name, lang='en-us')
        tts.save("temp.mp3")
        print(field_name)
        os.system("mpg321 temp.mp3")
        data = process_voice()
    else:
        field_name = request.args.get('field_name')
        tts = gTTS(text=field_name, lang='en-us')
        tts.save("temp.mp3")
        print(field_name)
        os.system("mpg321 temp.mp3")
        data = process_voice()
    return data


@app.route("/multiply/<int:key>/", methods=['GET'])
def multiply(key):
    return str(key*key)
