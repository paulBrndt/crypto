const { standardAlphabet } = require('../models/alphabet');

//HELPER

function reverseString(str) {
    return str.split("").reverse().join("");
}

//SERVICES


function caesarEncrypt(key, plain, alpha=standardAlphabet, usedForReversed=false){


    let cipher  = ""
    plain       = plain.toLowerCase()
    key         = (key + alpha.length) % alpha.length

    for (let i=0; i<plain.length; i++){
        const char = plain[i]
        const position = ((usedForReversed) ? standardAlphabet.indexOf(char): alpha.indexOf(char))
        if (position === -1) {
            cipher += char
        } else {
            const newPosition = (position + key) % alpha.length
            cipher += alpha[newPosition]
        }
    }

    return cipher
}

function caesarDecrypt(key, cipher, alpha=standardAlphabet, usedForReversed=false){
    return caesarEncrypt(-key, cipher, alpha, usedForReversed)
}


function caesarCrack(cipher, alpha=standardAlphabet){
    let results = {}
    for (let key=0; key<alpha.length; key++){
        const plain = caesarEncrypt(-key, cipher, alpha)
        results[key] = plain
    }
    return results
}


function reversedCaesarEncrypt(key, plain, alpha=standardAlphabet){
    alpha = reverseString(alpha)
    //Must somehow use decrypt
    return caesarDecrypt(key, plain, alpha, true)
}


module.exports = { caesarEncrypt, caesarDecrypt, caesarCrack, reversedCaesarEncrypt }
