from fileinput import filename
from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
@app.route('/home')
def hello_world():
    icon = url_for('static', filename='favicon.ico')
    script = url_for('static', filename='Home.js')
    c = url_for('static/Backend', filename="Crypto.py")
    return render_template('Home.html', icon=icon, script=script, c=c)



app.run("0.0.0.0", 8080)
