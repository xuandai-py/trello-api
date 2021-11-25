//const express = require("express")
import express from 'express'
import {mapOrder} from "*/utilities/sorts.js"
 
const app = express()

const hostname = 'localhost'
const port = 8889

app.get('/', (req, res) => {
    res.end('<h1>MERN STACK</h1></hr>')
})

app.listen(port, hostname, () => {
    console.log(`Server is running on ${hostname}:${port}/`);
})