const alphabet = "abcdefghijklmnopqrstuvwxyzäöüß"

class Caesar{ 

    constructor(alpha = alphabet) {
        this.alpha = alpha.toLowerCase()
    }
    
    encrypt(key, plain){

        let cipher = ""
        plain = plain.toLowerCase()

        for (let i=0; i<plain.length; i++){
            const char = plain[i]
            const position = this.alpha.indexOf(char)
            if (position === -1) {
                cipher += char
            } else {
                const newPosition = (position + key) % this.alpha.length
                cipher += this.alpha[newPosition]
            }
        }

        return cipher
    }

}


let cipher = new Caesar().encrypt(0,  "Zebras, das sind Tiere! 5 um genau zu sein.")
console.log(cipher)