#!/usr/bin/node

const express   = require('express');
const dotenv    = require('dotenv').config();

const caesar = require('./src/routes/caesarRoute');

const hostname  = process.env.host || '127.0.0.1';
const port      = process.env.port || 8000

const app       = express()

app.use(express.json())


//Routes

app.use("/caesar", caesar)

app.get("/", (req, res) => {
    res.send(req.headers)
})

//Listen
app.listen(port, hostname, () => {
    console.log(`Server is running on port ${port}`);
})