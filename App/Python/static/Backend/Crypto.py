import os
import requests     as req
import json

from dotenv         import load_dotenv

import Caesar

import commonUtils





class Crypto:
    def __init__(self):
        load_dotenv()
        self.api_key = os.getenv('CRYPTO_API_KEY')
        self.api_url = os.getenv('API_URL') or ""

        self.caesar = Caesar.Caesar(self.api_url, commonUtils.ErrorMsg)

    