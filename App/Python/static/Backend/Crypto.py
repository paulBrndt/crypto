import os
from dotenv         import load_dotenv

from . import Caesar

from . import commonUtils




class Crypto:
    def __init__(self):
        load_dotenv()
        self.api_key = os.getenv('CRYPTO_API_KEY')
        self.api_url = "http://127.0.0.1:8000"

        self.caesar = Caesar.Caesar(self.api_url, commonUtils.ErrorMsg)

    