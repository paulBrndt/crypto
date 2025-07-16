import requests as req
import json

class Caesar:

    def __init__(self, API_URL: str, stdError) -> None:
        self.API_URL    = API_URL
        self.stdError   = stdError


    def encrypt(self, key: int, plain: str, error=None) -> dict:
        if plain or key != None:
            result = req.get(f"{self.API_URL}/caesar/encrypt", json={'key': key, 'text': plain})
            return result.json()
        else:
            if error or self.stdError:
                error("Please provide both text and key") if error else self.stdError("Please provide both text and key")
    
    def decrypt(self, key: int, cipher: str, error=None) -> dict:
        if cipher or key != None:
            result = req.get(f"{self.API_URL}/caesar/decrypt", json={'key': key, 'text': cipher})
            return result.json()
        else:
            if error or self.stdError:
                error("Please provide both text and key") if error else self.stdError("Please provide both text and key")

    def crack(self, cipher: str, error=None) -> dict:
        if cipher:
            print(f"{self.API_URL}/caesar/crack")
            result = req.get(f"{self.API_URL}/caesar/crack", json={'text': cipher})
            return result.json()
        else:
            if error or self.stdError:
                error("Please provide both text and key") if error else self.stdError("Please provide both text and key")
        return {}

    def rot13(self, text: str, error=None) -> dict:
        if text:
            result = req.get(f"{self.API_URL}/caesar/rot13", json={'text': text})
            return result.json()
        else:
            if error or self.stdError:
                error("Please provide text") if error else self.stdError("Please provide text")
        return {}

    def reversedEncrypt(self, plain: str, error=None) -> dict:
        if plain:
            result = req.get(f"{self.API_URL}/caesar/reversed_encrypt", json={'text': plain})
            return result.json()
        else:
            if error or self.stdError:
                error("Please provide text") if error else self.stdError("Please provide text")
        return {}