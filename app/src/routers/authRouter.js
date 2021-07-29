const express = require('express'),
    debug = require('debug')('server:authRouter'),
    authRouter = express.Router();

const { MongoClient, ObjectId } = require('mongodb');
const config = require('../config/config');

const dbName = 'globomantics',
    url = `mongodb+srv://${config.db.user}:${config.db.password}@globomantics.bwpoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    sessionsCollection = 'sessions';

const mongoClient = new MongoClient(url);

authRouter.route('/signup').post((req, res) => {
    req.login(req.body, () => {
        res.redirect('/auth/profile');
    });
});

authRouter.route('/profile').get((req, res) => {
    res.json(req.user);
});

module.exports = authRouter;