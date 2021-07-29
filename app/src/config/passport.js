const passport = require('passport'),
    debug = require('debug')('server:passport');
require('./strategies/local.strategy')();

module.exports = function passportConfig(server) {
    server.use(passport.initialize());
    server.use(passport.session());

    passport.serializeUser((user, done) => {
        debug('serializeUser');
        done(null, user)
    });

    passport.deserializeUser((user, done) => {
        debug('deserializeUser');
        done(null, user)
    });
}