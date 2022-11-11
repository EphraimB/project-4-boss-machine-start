const express = require('express');
const app = require('../server');
const apiRouter = express.Router();

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');

app.use('/api', apiRouter);

apiRouter.get('/minions', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
})

module.exports = apiRouter;
