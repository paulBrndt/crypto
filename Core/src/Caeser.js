    const alphabet = "abcdefghijklmnopqrstuvwxyzäöüß"
    const sonderzeichen = "1234567890?=)(/&%$§!><°^*'+#`´_-.:,;"

    function caeserEncrypt(key, plain){

        let cipher = ""

        for (let i=0; i<plain.length; i++){
            if (sonderzeichen.search(plain[i].small())){

            }else{
            let position = alphabet.search(plain[i].small())
            cipher += alphabet[(position + key) % alphabet.length]
        }
      }

        return cipher
    }

let cipher = caeserEncrypt(10,  "Zebras, das sind Tiere! 5 um genau zu sein.")
console.log(cipher)
