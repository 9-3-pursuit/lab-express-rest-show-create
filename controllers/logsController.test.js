const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log');

// Index route
logs.get('/', (req, res) => {
  res.json(logsArray);
});

// Show route
logs.get('/:id', (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    res.json(logsArray[id]);
  } else {
    res.redirect('*');
  }
});

// Create route
logs.post('/', (req, res) => {
  const newLog = req.body;
  logsArray.push(newLog);
  res.json(newLog);
});

// Update route
logs.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedLog = req.body;
  logsArray[id] = updatedLog;
  res.json(updatedLog);
});

// Delete route
logs.delete('/:id', (req, res) => {
  const { id } = req.params;
  logsArray.splice(id, 1);
  res.json(logsArray);
});

module.exports = logs;
