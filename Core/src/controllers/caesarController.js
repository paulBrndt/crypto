const { caesarEncrypt } = require('../services/caesar');

const caesarController = (req, res) => {
    const { text, shift, method } = req.body;

    if (text === undefined || shift === undefined || method === undefined) {
        return res.status(400).json({ error: 'Please provide text, shift and method' });
    }
    const shiftNumber = shift
    if (isNaN(shiftNumber)) {
        return res.status(400).json({ error: 'Shift must be a number' });
    }

    let newShift = shiftNumber;

    if (method === "de") {
        // Decrypt
        newShift = -shiftNumber;
    } else if (method === "en") {
        // Encrypt
        newShift = shiftNumber;
    } else {
        return res.status(400).json({ error: 'Method must be either "en" or "de"' });
    }

    const result = caesarEncrypt(newShift, text);

    return res.json({ result });
};

module.exports = { caesarController };
