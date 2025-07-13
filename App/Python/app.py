from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
@app.route('/home')
def hello_world():
    #return "hi there"
    icon = url_for('static', filename='favicon.ico')
    return render_template('Home.html', icon=icon)



app.run("0.0.0.0", 8080)
