// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();
const cors = require('express');

const logsControllerArr = require('./controllers/logsController.js');

app.use(express.json()); 


app.use((req, res, next) => {
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/logs', logsControllerArr);

module.exports = app;
