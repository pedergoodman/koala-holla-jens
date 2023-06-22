const express = require('express');
const koalaRouter = express.Router()

// DB CONNECTION


// GET


// POST
koalaRouter.post('/koalas', (req, res) => {
    //log to see if post is working 
    console.log('inside of koalas 🐨, req.body', req.body);
    let id = req.body.id
    let name = req.body.name
    let gender = req.body.gender
    let age = req.body.age
    let ready_to_transfer = req.body.ready_to_transfer
    //query text for the data fields and sql injection prevention 
    const queryText = `INSERT INTO "koala" (id, name, gender, age, ready_to_trasnfer)
VALUES ($1, $2, $3, $4, $5)`
    //redeclaring our data fields 
    const queryParams = [id, name, gender, age, ready_to_transfer]
    //bringing in the pool 
    pool.query(queryText, queryParams)
        .then((results) => {
            res.sendStatus(201)
        }).catch((err) => {
            console.log(`Error making query ${queryText}`, err)
            res.sendStatus(500)
        })
})

// PUT


// DELETE

module.exports = koalaRouter;