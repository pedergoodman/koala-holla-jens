const express = require('express');
const koalaRouter = express.Router()

// DB CONNECTION
const pool = require('../modules/pool');


// GET
koalaRouter.get('/', (req, res) => {
  console.log('in /koala GET');

  let queryText = `SELECT * FROM "koala"`

  pool.query(queryText)
    .then((result) => {
      // send table row data
      res.send(result.rows)
    }).catch((err) => {
      // error if trouble getting koala list
      console.log('Error getting koala list', err);
      res.sendStatus(500)
    });
});

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
koalaRouter.put('/:id', (req, res) => {
    const idToUpdate = req.params.id;
    let query = `UPDATE "koala" SET "ready_to_transfer"=true WHERE "id"=$1`;
    pool.query(query, [idToUpdate])
    .then((result) => {
        console.log('Koala updated!');
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error making update request: ', error);
        res.sendStatus(500);
    })
})

// DELETE

module.exports = koalaRouter;