const express = require('express');
const app = require('../server');
const apiRouter = express.Router();
const minionsRoutes = require('./minions.js');
const ideasRoutes = require('./ideas.js');

app.use('/api/minions', minionsRoutes);
app.use('/api/ideas', ideasRoutes);

module.exports = apiRouter;
