const express = require('express'),
      sessionsRouter = express.Router(),
      sessions = require('../data/sessions.json');

sessionsRouter.route('/').get((req, res) => {
    res.render('sessions', { sessions })
});

sessionsRouter.route('/:id').get((req, res) => {
    const id = parseInt(req.params.id);
    const session = sessions.find(e => e.id === id);
    
    res.render('session', { session: session })
});

module.exports = sessionsRouter;