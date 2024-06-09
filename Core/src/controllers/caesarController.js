const Caesar = require('caesar');

const encryptCaesar = ((req, res) => {
    const { text, shift } = req.body;
    if (!text || !shift) {
        return res.status(400).json({ error: 'Please provide both text and shift' });
    }
    const encryptedText = Caesar.encrypt(text, shift);
    return res.json({ encryptedText });
})