const express = require('express'),
    chalk = require('chalk'),
    debug = require('debug')('server:index'),
    morgan = require('morgan'),
    path = require('path'),
    SERVER_PORT = process.env.PORT || 8000;

const server = express();

server.use(morgan('tiny'));
server.use(express.static(path.join(__dirname, '/public/')));

server.set('views', './src/views');
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        title: 'Globomantics'
    });
});

server.listen(SERVER_PORT, () => {
    debug(`Server listening on port ${chalk.green(SERVER_PORT)}`)
});