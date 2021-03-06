# node-webapp

*Pluralsight* course *Building Web Applications with Node.js and Express* by Jonathan Mills

## Handy debugging packages

- **nodemon** is a monitoring tool that triggers a hot-reload whenever a file is changed
- **morgan** is a middleware that intercepts HTTP requests for logging purposes
- **debug** is a small debugging utility
- **chalk** adds style for highlighting relevant log info

## Simple Nodemon configuration
```
  "nodemonConfig": {
    "restartable": "rs",
    "delay": 2500
  }
```

## Template Engine

This project use EJS as template engine

## Database

We're using [MongoDb](https://www.mongodb.com/pt-br), a document-based data base.