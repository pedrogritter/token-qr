# Token Flyer App 
### *Simplified NightClub Website - built using Flask, JS &amp; Bulma.* 

The ideia was to create a SPA with a interactive background where you could check the description and music of the DJ's playing throughout a certain period of time.
It is acessible via QR code so the code could be printed on paper format publicity.

#### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#### Prerequisites
What things you need to install the software and how to install:
1. Python 2.7
2. Flask


#### Installing
Here is a step by step series of examples that tell you how to get a development env running

+  Create or go to the desired folder destination

+  Create a virtual environment:
```
virtualenv venv
```

+ Activate the environment:
```
. venv/bin/activate
```

If it worked, terminal prompt should be similar to this:
```
(venv) User@computer-UX430UAR:~/Documents/token-qr$
```

+  Clone the repository to the destination folder
```git
git clone https://github.com/pedrogritter/token-qr.git
```
+ Install required dependencies by running:
```
pip install -r requirements.txt
```

#### Deployment
This project is deployed on [Heroku](https://www.heroku.com/) over [here](http://token-qr.herokuapp.com/)

To deploy this on a live system enter the following command:
```
python deploy.py
```

## Built With

[Flask](http://flask.pocoo.org)- The Python Microframework used

[Javascript](https://www.javascript.com) - Scripting language

[Bulma](https://bulma.io)- CSS Framework

