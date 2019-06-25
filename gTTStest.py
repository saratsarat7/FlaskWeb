from gtts import gTTS
import os
tts = gTTS(text='Please say patient name', lang='en-us')
tts.save("good.mp3")
os.system("mpg321 good.mp3")