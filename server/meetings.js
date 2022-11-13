const express = require('express');
const db = require('./db');
const apiRouter = express.Router();

//populate data set
let meetings = db.getAllFromDatabase('meetings');

apiRouter.get('/', (req, res, next) => {
    res.send(meetings);
})

apiRouter.post('/', (req, res, next) => {
    const newMeeting = db.createMeeting();

    if(!newMeeting) {
        res.status(400).send();
    } else {
        db.addToDatabase('meetings', newMeeting);
        res.status(201).send(newMeeting);
    }
})

apiRouter.delete('/', (req, res, next) => {
    db.deleteAllFromDatabase('meetings');
    meetings = [];
    res.status(204).send();
});

module.exports = apiRouter;