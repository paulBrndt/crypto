from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route('/home')
def hello_world():
    #return "hi there"
    return render_template('Home.html')


app.run("0.0.0.0", "8080")

