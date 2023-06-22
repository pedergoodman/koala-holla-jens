const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');


// GET
router.get('/', (req, res) => {
  console.log('in /koala GET');

  let queryText = `SELECT * FROM "kolas"`

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


// PUT
router.put('/:id', (req, res) => {
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