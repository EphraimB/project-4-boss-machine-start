const express = require('express');
const db = require('./db');
const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
    res.send(db.getAllFromDatabase('ideas'));
})

apiRouter.post('/', (req, res, next) => {
    res.send(db.addToDatabase('ideas'));
})

apiRouter.get('/:ideaId', (req, res, next) => {
    if(db.getFromDatabaseById('ideas', req.params.ideaId)) {
        res.send(db.getFromDatabaseById('ideas', req.params.ideaId));
    } else {
        res.status(404).send();
    }
})

apiRouter.put('/:ideaId', (req, res, next) => {
    if(db.updateInstanceInDatabase('ideas', req.params.ideaId)) {
        res.send(db.updateInstanceInDatabase('ideas', req.params.ideaId));
    } else {
        res.status(404).send();
    }
});

apiRouter.delete('/:ideaId', (req, res, next) => {
    if(db.deleteFromDatabasebyId('ideas', req.params.ideaId)) {
        res.send(db.deleteFromDatabasebyId('ideas', req.params.ideaId));
    } else {
        res.status(404).send();
    }
});

module.exports = apiRouter;