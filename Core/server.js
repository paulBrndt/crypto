#!/usr/bin/node

const path      = require("path")
const express   = require('express');
const envPath   = path.resolve(path.resolve(process.cwd(), ".."), ".env")
require('dotenv').config({path: envPath});

const caesar = require('./src/routes/caesarRoute');

const hostname  = process.env.host || '127.0.0.1';
const port      = process.env.port || 8000

const app       = express()

app.use(express.json())


//Routes

app.use("/caesar", caesar)

app.get("/", (req, res) => {
    res.send("Hi there! ;)")
})

//Listen
app.listen(port, hostname, () => {
    console.log(`Server is running on port ${port} at host ${hostname}`);
})