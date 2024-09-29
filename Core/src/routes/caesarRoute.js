const express = require('express');
const { caesarController, encrypt, decrypt, crack, rot13, reversedEncrypt } = require('../controllers/caesarController');

const router = express.Router();

router.get("/",                 caesarController)

router.get("/crack",            crack)
router.get("/encrypt",          encrypt)
router.get("/decrypt",          decrypt)
router.get("/rot13",            rot13)
router.get("/reversedEncrypt",  reversedEncrypt)


module.exports = router