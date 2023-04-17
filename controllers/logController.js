// DEPENDENCIES
const express = require("express");
const logData = require("../models/log");
const logs = express.Router();

// GET: ROUTE HANDLERS
const rootHandler = (req, res) => {
  res.send(logData);
};

const logIndexHandler = (req, res) => {
  const { index } = req.params;

  logData[index] ? res.status(200).send(logData[index]) : res.status(404).redirect("/error");
};

// POST: ROUTE HANDLERS
const createLogHandler = (req, res) => {
  const log = req.body;
  logData.push(log);
  res.status(201).send(logData[logData.length - 1]);
};

// DELETE: ROUTE HANDLERS
const deleteLogHandler = (req, res) => {
  const { index } = req.params;
  logData.splice(index, 1);
  res.status(200).send(logData);
};

// PUT: ROUTE HANDLERS
const updateLogHandler = (req, res) => {
  const { index } = req.params;
  const log = req.body;

  if (logData[index]) {
    logData[index] = log;
    res.status(200).send(logData[index]);
  } else {
    res.status(404).redirect("/error");
  }
};

// ROUTES for GET requests
logs.get("/", rootHandler);
logs.get("/:index", logIndexHandler);

// ROUTE for POST requests
logs.post("/", createLogHandler);

// ROUTE for DELETE requests
logs.delete("/:index", deleteLogHandler);

// ROUTE for PUT requests
logs.put("/:index", updateLogHandler);

module.exports = logs;
