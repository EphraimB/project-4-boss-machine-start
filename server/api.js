const express = require('express');
const app = require('../server');
const apiRouter = express.Router();

const db = require('./db');

app.use('/api', apiRouter);

apiRouter.get('/minions', (req, res, next) => {
    res.send(db.getAllFromDatabase('minions'));
})

apiRouter.post('/minions', (req, res, next) => {
    res.send(db.addToDatabase('minions'));
})

apiRouter.get('/minions/:minionId', (req, res, next) => {
    if(db.getFromDatabaseById('minions', req.params.minionId)) {
        res.send(db.getFromDatabaseById('minions', req.params.minionId));
    } else {
        res.status(404).send();
    }
})

apiRouter.put('/minions/:minionId', (req, res, next) => {
    if(db.updateInstanceInDatabase('minions', req.params.minionId)) {
        res.send(db.updateInstanceInDatabase('minions', req.params.minionId));
    } else {
        res.status(404).send();
    }
});

apiRouter.delete('/minions/:minionId', (req, res, next) => {
    if(db.deleteFromDatabasebyId('minions', req.params.minionId)) {
        res.send(db.deleteFromDatabasebyId('minions', req.params.minionId));
    } else {
        res.status(404).send();
    }
});

module.exports = apiRouter;
