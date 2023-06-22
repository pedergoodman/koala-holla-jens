const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');


// GET
router.get('/', (req, res) => {
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


// DELETE

module.exports = koalaRouter;