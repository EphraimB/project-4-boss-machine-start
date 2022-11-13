const express = require('express');
const db = require('./db');
const apiRouter = express.Router();

//populate data set
let ideas = db.getAllFromDatabase('ideas');

apiRouter.use('/:ideaId', (req, res, next) => {
    let ideaId = req.params.ideaId;
    let ideaIndex = ideas.findIndex(obj => obj.id === ideaId);
    if(ideaIndex !== -1){
      req.ideaIndex = ideaIndex;
      req.ideaId = ideaId;
      next();
    } else {
      res.status(404).send('Idea not found!');
    }
})

apiRouter.get('/', (req, res, next) => {
    res.send(ideas);
})

apiRouter.post('/', (req, res, next) => {
    const receivedIdea = req.body;

    if(!receivedIdea) {
        res.status(400).send();
    } else {
        db.addToDatabase('ideas', receivedIdea);
        res.status(201).send(receivedIdea);
    }
})

apiRouter.get('/:ideaId', (req, res, next) => {
    res.send(ideas[req.ideaIndex]);
})

apiRouter.put('/:ideaId', (req, res, next) => {
    db.updateInstanceInDatabase('ideas', req.params.ideaId);
    res.send(db.getAllFromDatabase('ideas')[req.ideaIndex])
});

apiRouter.delete('/:ideaId', (req, res, next) => {
    db.deleteFromDatabasebyId('ideas', req.params.ideaId);
    res.status(204).send();  
});

module.exports = apiRouter;