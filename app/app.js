const express = require('express');
chalk = require('chalk'),
    debug = require('debug')('server'),
    morgan = require('morgan'),
    path = require('path'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

const sessionsRouter = require('./src/routers/sessionsRouter');
const adminRouter = require('./src/routers/adminRouter');
const authRouter = require('./src/routers/authRouter');

const SERVER_PORT = (process.env.PORT || 8000);

const server = express();
server.use(morgan('tiny'));
server.use(express.static(path.join(__dirname, '/src/public/')));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(session({ secret: 'super-secret-glomantics-key' }));

require('./src/config/passport')(server);

server.set('views', './src/views');
server.set('view engine', 'ejs');

server.get('/', (req, res) => res.render('index'));
server.use('/sessions', sessionsRouter);
server.use('/admin', adminRouter);
server.use('/auth', authRouter);

server.listen(SERVER_PORT, () => {
    debug(`Server listening on port ${chalk.green(SERVER_PORT)}`)
});