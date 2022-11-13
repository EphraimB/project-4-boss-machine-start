const express = require('express');
const app = require('../server');
const apiRouter = express.Router();
const minionsRoutes = require('./minions.js');

app.use('/api/minions', minionsRoutes);

module.exports = apiRouter;
