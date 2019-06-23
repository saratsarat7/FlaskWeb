from flask import render_template
from app import app

import sys
import os
sys.path.append(os.path.abspath("/media/sarat/Sarat/Development/Python/Flask WebPage/app"))
from GoogleApi import *

@app.route('/')
@app.route('/index')
def index():
    # user = {'username': 'Sarat'}
    # return render_template('index.html', title='Home', user=user)
    return render_template('index.html', title='Home')

@app.route('/SpeechApi')
def page():
    data = process_voice()
    # return "You said : "+data
    return data


@app.route("/multiply/<int:key>/", methods=['GET'])
def multiply(key):
    return str(key*key)
