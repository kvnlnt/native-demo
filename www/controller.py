"""
:synopsis: Main blueprint router and controller
"""

from flask import Blueprint, render_template


main = Blueprint('main', __name__, template_folder='templates')


@main.route('/')
def home():
    """ home page """
    return render_template("pages/home.html")


@main.route('/voice')
def voice():
    """ voice page """
    return render_template("pages/voice.html")


@main.route('/solutions')
def solutions():
    """ solutions page """
    return render_template("pages/solutions.html")


@main.route('/solutions/unified-communications')
def unified_communication():
    """ unified communications page """
    return render_template("pages/unified-communications.html")


@main.route('/pricing')
def pricing():
    """ pricing page """
    return render_template("pages/pricing.html")


@main.route('/developers')
def developers():
    """ developers page """
    return render_template("pages/developers.html")


@main.route('/partners')
def partners():
    """ partners page """
    return render_template("pages/partners.html")


@main.route('/login')
def login():
    """ login page """
    return render_template("pages/login.html")
