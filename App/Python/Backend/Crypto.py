import os
import requests     as req
import json

from dotenv         import load_dotenv

from commonUtils    import ErrorMsg

from Caesar         import Caesar





class Crypto:
    def __init__(self):
        load_dotenv()
        self.api_key = os.getenv('CRYPTO_API_KEY')
        self.api_url = os.getenv('API_URL')

        self.caesar = Caesar(self.api_url, ErrorMsg)

    

    
