const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST
app.post('/koala', (req, res) => {
    //log to see if post is working 
console.log('inside of koalas 🐨, req.body', req.body);
let id = req.body.id
let name = req.body.name 
let gender = req.body.gender 
let age = req.body.age
let ready_to_transfer = req.body.ready_to_transfer


})

// PUT


// DELETE

module.exports = koalaRouter;