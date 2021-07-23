const express = require('express');

const server = express();

server.get('/', (req, res) => {
    console.info(`Request received at ${new Date()}`)
    res.statusCode = 200;
    res.send('It works!')
});

server.listen(4242, () => console.log('Server listening on port 4242'));