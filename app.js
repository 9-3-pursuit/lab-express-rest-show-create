// Import required modules
const express = require('express');
const logsController = require('./controllers/logsController');

// Create a new Express application
const app = express();

// Define middleware to parse JSON requests
app.use(express.json());

// Define a middleware function that logs incoming requests
app.use((req, res, next) => {
  console.log('Incoming request...');
  next();
});

// Define a route that responds with a simple message
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use the logsController for the /logs route
app.use('/logs', logsController);

// Define a catch-all route for 404 errors
app.use((req, res) => {
  res.status(404).send('Sorry, page not found!');
});

// Export the Express application
module.exports = app;
