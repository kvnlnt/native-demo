#! ../env/bin/python
# -*- coding: utf-8 -*-
from www import create_app


class TestController:

    def setup(self):

        # get app test config
        app = create_app('www.settings.TestConfig', env='dev')

        # create test app
        self.app = app.test_client()

    def teardown(self):

        # destroy session and tables
        print "done"

    def test_home(self):
        endpoint = '/'
        response = self.app.get(endpoint)
        assert response.status_code == 200

    def test_voice(self):
        endpoint = '/voice'
        response = self.app.get(endpoint)
        assert response.status_code == 200

    def test_solutions(self):
        endpoint = '/solutions'
        response = self.app.get(endpoint)
        assert response.status_code == 200

    def test_pricing(self):
        endpoint = '/pricing'
        response = self.app.get(endpoint)
        assert response.status_code == 200

    def test_developers(self):
        endpoint = '/developers'
        response = self.app.get(endpoint)
        assert response.status_code == 200

    def test_partners(self):
        endpoint = '/partners'
        response = self.app.get(endpoint)
        assert response.status_code == 200

    def test_login(self):
        endpoint = '/login'
        response = self.app.get(endpoint)
        assert response.status_code == 200
