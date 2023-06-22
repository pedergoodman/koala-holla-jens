const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


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