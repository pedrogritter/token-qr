from flask import Flask, request
from flask import render_template
from flask_assets import Environment, Bundle

app = Flask(__name__, static_url_path='')

assets = Environment(app)
assets.url = app.static_url_path

scss = Bundle('css/glitch.scss', filters='pyscss', output='css/scss_all.css')

assets.config['SECRET_KEY'] = 'secret!'
assets.config['PYSCSS_LOAD_PATHS'] = assets.load_path
assets.config['PYSCSS_STATIC_URL'] = assets.url
assets.config['PYSCSS_STATIC_ROOT'] = assets.directory
assets.config['PYSCSS_ASSETS_URL'] = assets.url
assets.config['PYSCSS_ASSETS_ROOT'] = assets.directory

assets.register('scss_all', scss)

@app.route('/')
def root():
    return render_template('token-qr-template.html')


if __name__ == '__main__':
    app.run(debug=True),  # Do not leave on on real situations