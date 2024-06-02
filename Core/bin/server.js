const express   = require('express');
const dotenv    = require('dotenv').config();

const hostname  = process.env.host || '127.0.0.1';
const port      = process.env.port || 8000

const app       = express()

//Routes
app.get("/", (req, res) => {
    res.send("Hello world")
})

//Listen
app.listen(port, hostname, () => {
    console.log(`Server is running on port ${port}`);
})