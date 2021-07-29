const express = require('express');
const debug = require('debug')('server:adminRouter');
const adminRouter = express.Router();
const sessions = require('../data/sessions.json');
const { MongoClient } = require('mongodb');
const config = require('../config/config');

const url = `mongodb+srv://${config.db.user}:${config.db.password}@globomantics.bwpoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const dbName = 'globomantics';
const mongoClient = new MongoClient(url);

adminRouter.route('/').get((req, res) => {
    (async function () {
        try {
            client = await mongoClient.connect();
            debug('Connected to the MongoDB');
            const db = client.db(dbName);
            const response = await db.collection('sessions').insertMany(sessions);
            res.json(response);
        } catch (error) {
            debug(error.stack)
        }
    })();
});
module.exports = adminRouter;