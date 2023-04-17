// DEPENDENCIES
const express = require("express");
const logData = require("../models/log");
const logs = express.Router();

// ROUTE HANDLERS
const rootHandler = (req, res) => {
  res.send(logData);
};

const logIndexHandler = (req, res) => {
  const { index } = req.params;

  logData[index] ? res.send(logData[index]) : res.status(404).redirect("/error");
};

// ROUTES
logs.get("/", rootHandler);
logs.get("/:index", logIndexHandler);

module.exports = logs;
