const express = require('express');
const db = require('./db');
const apiRouter = express.Router();

//populate data set
let minions = db.getAllFromDatabase('minions');

apiRouter.use('/:minionId', (req, res, next) => {
    let minionId = req.params.minionId;
    let minionIndex = minions.findIndex(obj => obj.id === minionId);
    if(minionIndex !== -1){
      req.minionIndex = minionIndex;
      req.minionId = minionId;
      next();
    } else {
      res.status(404).send('Minon not found!');
    }
})

apiRouter.get('/', (req, res, next) => {
    res.send(minions);
})

apiRouter.post('/', (req, res, next) => {
    const receivedMinion = req.body;

    if(!receivedMinion) {
        res.status(400).send();
    } else {
        db.addToDatabase('minions', receivedMinion);
        res.status(201).send(receivedMinion);
    }
})

apiRouter.get('/:minionId', (req, res, next) => {
    res.send(minions[req.minionIndex]);
})

apiRouter.put('/:minionId', (req, res, next) => {
    db.updateInstanceInDatabase('minions', req.params.minionId);
    res.send(db.getAllFromDatabase('minions')[req.minionIndex])
});

apiRouter.delete('/:minionId', (req, res, next) => {
    db.deleteFromDatabasebyId('minions', req.params.minionId);
    res.status(204).send();  
});

module.exports = apiRouter;