from fileinput import filename
from flask import Flask, render_template, url_for, request, jsonify

app = Flask(__name__)

@app.route("/")
@app.route('/home')
def hello_world():
    icon = url_for('static', filename='favicon.ico')
    script = url_for('static', filename='Home.js')
    return render_template('Home.html', icon=icon, script=script)

from static.Backend.Crypto import Crypto

@app.route('/encrypt', methods=['POST'])
def encrypt():
    data = request.get_json()
    text = data.get('text') if data else None
    if not text:
        return jsonify({'result': 'Kein Text übergeben!'}), 400
    # Hier Crypto verwenden
    crypto = Crypto()
    # Beispiel: result = crypto.caesar.encrypt(text)
    result = "Verschlüsseltes Ergebnis"  # Platzhalter
    return jsonify({'result': result})


app.run("0.0.0.0", 8080)
