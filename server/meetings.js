const express = require('express');
const db = require('./db');
const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
    res.send(db.getAllFromDatabase('meetings'));
})

apiRouter.post('/', (req, res, next) => {
    res.send(db.addToDatabase('meetings'));
})

apiRouter.delete('/', (req, res, next) => {
    if(db.deleteAllFromDatabase('meetings')) {
        res.send(db.deleteAllFromDatabase('meetings'));
    } else {
        res.status(404).send();
    }
});

module.exports = apiRouter;