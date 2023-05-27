// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();

// const logsArray = require("./models/log.js");
const logsControllerArr = require('./controllers/logsController.js');

app.use(express.json()); // for parsing app / json


app.use((req, res, next) => {
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/logs', logsControllerArr);

module.exports = app;
