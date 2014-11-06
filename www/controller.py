from flask import Blueprint, render_template


main = Blueprint('main', __name__, template_folder='templates')


@main.route('/')
def home():
    return render_template("pages/home.html")


@main.route('/patterns')
def patterns():
    return render_template("pages/patterns.html")
