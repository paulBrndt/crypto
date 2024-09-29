    const alphabet = "abcdefghijklmnopqrstuvwxyzäöüß"
    function caeserEncrypt(key, plain){

        let cipher = ""

        for (let i=0; i<plain.length; i++){
            plain = plain.toLowerCase()
            let plainChar = plain[i]
            if (alphabet.includes(plainChar)){
                let position = alphabet.search(plainChar)
                cipher += alphabet[(position + key) % alphabet.length]
            } else {
                cipher += plainChar
            }
        }

        return cipher
    }

let cipher = caeserEncrypt(3,  "Zebras, das sind Tiere! 5 um genau zu sein.")
console.log(cipher)
let plain = caeserEncrypt(-3, cipher)
console.log(plain)
