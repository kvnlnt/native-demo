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
    return render_template(
        "pages/voice.html",
        section=".voice", has_subpage=False
    )


@main.route('/solutions')
def solutions():
    """ solutions page """
    return render_template(
        "pages/solutions.html",
        section=".solutions", has_subpage=True
    )


@main.route('/solutions/unified-communications')
def unified_communication():
    """ unified communications page """
    return render_template(
        "pages/unified-communications.html",
        section=".solutions", has_subpage=True
    )


@main.route('/solutions/call-center')
def call_center():
    """ call center page """
    return render_template(
        "pages/call-center.html",
        section=".solutions", has_subpage=True
    )


@main.route('/solutions/pbx-and-phone-systems')
def pbx_and_phone_systems():
    """ pbx and phone systems page """
    return render_template(
        "pages/pbx-and-phone-systems.html",
        section=".solutions", has_subpage=True
    )


@main.route('/pricing')
def pricing():
    """ pricing page """
    return render_template(
        "pages/pricing.html",
        section=".pricing", has_subpage=False
    )


@main.route('/developers')
def developers():
    """ developers page """
    return render_template(
        "pages/developers.html",
        section=".developers", has_subpage=False
    )


@main.route('/partners')
def partners():
    """ partners page """
    return render_template(
        "pages/partners.html",
        section=".partners", has_subpage=False
    )


@main.route('/login')
def login():
    """ login page """
    return render_template(
        "pages/login.html",
        section=".login", has_subpage=False
    )
