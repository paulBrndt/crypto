const alpha = "abcdefghijklmnopqrstuvwxyzäöüß"

function caesarEncrypt(key, plain){

    let cipher = ""
    plain = plain.toLowerCase()

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

let cipher = caesarEncrypt(0,  "Zebras, das sind Tiere! 5 um genau zu sein.")
console.log(cipher)