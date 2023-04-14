const express = require('express');
const app = express();
const logsController = require('./controllers/logsController.js');

app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {;
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use('/logs', logsController);






module.exports = app;