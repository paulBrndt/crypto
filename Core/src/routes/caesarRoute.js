const express = require('express');
const { caesarController } = require('../controllers/caesarController');

const router = express.Router();

router.get("/", caesarController)


module.exports = router