const express = require('express'),
    chalk = require('chalk'),
    debug = require('debug')('server:index'),
    morgan = require('morgan'),
    SERVER_PORT = 4242;

const server = express();

server.use(morgan('tiny'));

server.get('/', (req, res) => {
    res.statusCode = 200;
    res.send('It works!');
});

server.listen(SERVER_PORT, () => {
    debug(`Server listening on port ${chalk.green(SERVER_PORT)}`)
});