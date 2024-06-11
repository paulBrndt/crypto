const { caesarEncrypt, caesarDecrypt, caesarCrack } = require('../services/caesar');

const encrypt = (req, res) => {
    const { text, key } = req.body;
    if (text === undefined || key === undefined) {
        return res.status(400).json({ error: 'Please provide both text and key' });
    }
    const cipher = caesarEncrypt(key, text);
    res.json({ cipher });
    return cipher
}

const decrypt = (req, res) => {
    const { text, key } = req.body;
    if (text === undefined || key === undefined) {
        return res.status(400).json({ error: 'Please provide both text and key' });
    }
    const plain = caesarDecrypt(key, text);
    res.json({ plain });
    return plain
}

const crack = (req, res) => {
    const { text } = req.body;
    if (text === undefined) {
        return res.status(400).json({ error: 'Please provide text' });
    }
    const result = caesarCrack(text);
    res.json({ result });
    return result
} 

const rot13 = (req, res) => {
    const { text } = req.body;
    if (text === undefined) {
        return res.status(400).json({ error: 'Please provide text' });
    }
    const result = caesarEncrypt(13, text);
    res.json({ result });
    return result
}


const caesarController = (req, res) => {
    const { method } = req.body;

    if (method === undefined){
        res.status(400).json({ error: 'Please provide method (encrypt, decrypt or crack)' });
        return false
    }
    if (method === 'encrypt') {
        return encrypt(req, res);
    } else if (method === 'decrypt') {
        return decrypt(req, res);
    } else if (method === 'crack') {
        return crack(req, res);
    } else if (method === 'rot13'){
        return rot13(req, res);
    } else {
        return res.status(400).json({ error: 'Invalid method. Please use encrypt, decrypt or crack' })
    }

};



module.exports = { caesarController, decrypt, encrypt, crack, rot13 };
