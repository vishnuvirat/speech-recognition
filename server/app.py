from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(false)

@app.route("/")
def words():
    pin = request.args.get('pin')
    status = request.args.get('status')
    if pin is not None and status is not None:
        if status == "on":
            GPIO.setup(int(pin), GPIO.OUT)
        elif status == 'off':
            GPIO.setup(int(pin), GPIO.IN)
        return f"pin = {pin} status = {status}"

    else:
        return "please provide pin and status"
