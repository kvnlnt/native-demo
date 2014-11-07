from flask import Blueprint, render_template


main = Blueprint('main', __name__, template_folder='templates')


@main.route('/')
def home():
    return render_template("pages/home.html")


@main.route('/voice')
def voice():
    return render_template("pages/voice.html")


@main.route('/solutions')
def solutions():
    return render_template("pages/solutions.html")


@main.route('/pricing')
def pricing():
    return render_template("pages/pricing.html")


@main.route('/developers')
def developers():
    return render_template("pages/developers.html")


@main.route('/partners')
def partners():
    return render_template("pages/partners.html")


@main.route('/login')
def login():
    return render_template("pages/login.html")


@main.route('/signup')
def signup():
    return render_template("pages/signup.html")
