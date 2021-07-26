const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const path = require('path');
const SERVER_PORT = (process.env.PORT || 8000);
const sessionsRouter = require('./src/routers/sessionsRouter');
const adminRouter = require('./src/routers/adminRouter');

const server = express();
server.use(morgan('tiny'));
server.use(express.static(path.join(__dirname, '/src/public/')));
server.set('views', './src/views');
server.set('view engine', 'ejs');

server.get('/', (req, res) => res.render('index'));
server.use('/sessions', sessionsRouter);
server.use('/admin', adminRouter);

server.listen(SERVER_PORT, () => {
    debug(`Server listening on port ${chalk.green(SERVER_PORT)}`)
});