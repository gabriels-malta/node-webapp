const { send } = require('process');

const express = require('express'),
    chalk = require('chalk'),
    debug = require('debug')('server:index'),
    morgan = require('morgan'),
    path = require('path'),
    SERVER_PORT = process.env.PORT || 8000,
    sessions = require('./data/sessions.json');

const server = express();
const sessionRouter = express.Router();

server.use(morgan('tiny'));
server.use(express.static(path.join(__dirname, '/public/')));

server.set('views', './src/views');
server.set('view engine', 'ejs');

sessionRouter.route('/').get((req, res) => {
    res.render('sessions', { sessions })
});
sessionRouter.route('/:id').get((req, res) => {
    const id = parseInt(req.params.id);
    const session = sessions.find(e => e.id === id);
    
    res.render('session', { session: session })
});
server.use('/sessions', sessionRouter);

server.get('/', (req, res) => {
    res.render('index', {
        title: 'Globomantics'
    });
});

server.listen(SERVER_PORT, () => {
    debug(`Server listening on port ${chalk.green(SERVER_PORT)}`)
});