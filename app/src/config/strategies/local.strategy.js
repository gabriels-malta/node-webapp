const passport = require('passport'),
    debug = require('debug')('server:local.strategy');
const { Strategy } = require('passport-local');

function verify(username, password, done) {
    const user = { username, password, 'timestamp': `${(new Date()).getTime()}` }
    debug(`Verify called - timestamp ${user.timestamp}`)
    done(null, user);
}

const strategy = new Strategy({
    usernameField: 'username',
    passwordField: 'password'
}, verify);

module.exports = function () {
    passport.use(strategy)
}