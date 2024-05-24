from dotenv import load_dotenv
import os
import requests as req

class API:
    def __init__(self):
        load_dotenv()
        self.api_key = os.getenv('CRYPTO_API_KEY')

""" 
API
    - Methods
        Caesar
        Vigenere
        Toni Spezial
    - encrypt
        msg
        key
        method
    - decrypt
        cipher
        key
        method
    - crack
        cipher
        method
    - 
"""