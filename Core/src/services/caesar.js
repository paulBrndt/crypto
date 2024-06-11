const { standardAlphabet } = require('../models/alphabet');

function caesarEncrypt(key, plain, alpha=standardAlphabet){


    let cipher  = ""
    plain       = plain.toLowerCase()
    key         = (key + alpha.length) % alpha.length

    for (let i=0; i<plain.length; i++){
        const char = plain[i]
        const position = alpha.indexOf(char)
        if (position === -1) {
            cipher += char
        } else {
            const newPosition = (position + key) % alpha.length
            cipher += alpha[newPosition]
        }
    }

    return cipher
}

function caesarDecrypt(key, cipher, alpha=standardAlphabet){
    return caesarEncrypt(-key, cipher, alpha)
}


function caesarCrack(cipher, alpha=standardAlphabet){
    let results = {}
    for (let key=0; key<alpha.length; key++){
        const plain = caesarEncrypt(-key, cipher, alpha)
        results[key] = plain
    }
    return results
}



module.exports = { caesarEncrypt, caesarDecrypt, caesarCrack }