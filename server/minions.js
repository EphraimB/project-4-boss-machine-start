const express = require('express');
const db = require('./db');
const apiRouter = express.Router();

// app.use('/api', apiRouter);

apiRouter.get('/', (req, res, next) => {
    res.send(db.getAllFromDatabase('minions'));
})

apiRouter.post('/', (req, res, next) => {
    res.send(db.addToDatabase('minions'));
})

apiRouter.get('/:minionId', (req, res, next) => {
    if(db.getFromDatabaseById('minions', req.params.minionId)) {
        res.send(db.getFromDatabaseById('minions', req.params.minionId));
    } else {
        res.status(404).send();
    }
})

apiRouter.put('/:minionId', (req, res, next) => {
    if(db.updateInstanceInDatabase('minions', req.params.minionId)) {
        res.send(db.updateInstanceInDatabase('minions', req.params.minionId));
    } else {
        res.status(404).send();
    }
});

apiRouter.delete('/:minionId', (req, res, next) => {
    if(db.deleteFromDatabasebyId('minions', req.params.minionId)) {
        res.send(db.deleteFromDatabasebyId('minions', req.params.minionId));
    } else {
        res.status(404).send();
    }
});

module.exports = apiRouter;