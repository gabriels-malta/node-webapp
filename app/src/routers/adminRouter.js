const express = require('express'),
    debug = require('debug')('server:adminRouter'),
    adminRouter = express.Router(),
    sessions = require('../data/sessions.json');

const { reset } = require('chalk');
const { MongoClient } = require('mongodb');
const config = require('../config');

adminRouter.route('/').get((req, res) => {
    const url = `mongodb+srv://${config.db.user}:${config.db.password}@globomantics.bwpoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const dbName = 'globomantics';

    (async function () {
        let client;
        try {
            client = await MongoClient.connect(url);
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