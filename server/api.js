const express = require('express');
const app = require('../server');
const apiRouter = express.Router();
const minionsRoutes = require('./minions.js');
const ideasRoutes = require('./ideas.js');
const meetingsRoutes = require('./meetings.js');

app.use('/api/minions', minionsRoutes);
app.use('/api/ideas', ideasRoutes);
app.use('/api/meetings', meetingsRoutes);

module.exports = apiRouter;
