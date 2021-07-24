const debug = require('debug')('server:config');

let config = {
    db: {
        user: '{{db_user}}',
        password: '{{db_password}}'
    }
};

if (process.env.DEBUG) {
    config = require('./secrets.json');
    debug('Secret key retrivied from localhost');
} else
    debug('Secret key retrivied by magic');



module.exports = config;