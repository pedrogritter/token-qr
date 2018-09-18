from flask import Flask, request
from flask import render_template

app = Flask(__name__, static_url_path='')

@app.route('/')
def root():
    return render_template('token-qr-template.html')


if __name__ == '__main__':
    app.run(debug=True),  # Do not leave on on real situations
    app.debug = True
