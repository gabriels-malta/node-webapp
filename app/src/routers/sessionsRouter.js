const express = require('express');
const debug = require('debug')('server:sessionsRouter');
const sessionsRouter = express.Router();
const { MongoClient, ObjectId } = require('mongodb');
const config = require('../config/config');

const dbName = 'globomantics',
    url = `mongodb+srv://${config.db.user}:${config.db.password}@globomantics.bwpoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    sessionsCollection = 'sessions';

const mongoClient = new MongoClient(url);

sessionsRouter.route('/').get((req, res) => {
    (async function () {
        try {
            await mongoClient.connect();
            debug('Connected to the MongoDB');
            const db = mongoClient.db(dbName);
            const sessions = await db.collection(sessionsCollection).find().toArray();
            res.render('sessions', { sessions });
        } catch (error) {
            debug(error.stack)
        }
    })();
});

sessionsRouter.route('/:id').get((req, res) => {
    const id = req.params.id;
    (async function () {
        try {
            await mongoClient.connect();
            debug('Connected to the MongoDB');
            const db = mongoClient.db(dbName);
            const session = await db.collection(sessionsCollection).findOne({ _id: new ObjectId(id) });
            res.render('session', { session });
        } catch (error) {
            debug(error.stack)
        }
    })();
});

module.exports = sessionsRouter;