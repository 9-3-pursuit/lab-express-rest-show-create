const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log");

// GET ✓ sends the logs array --v
logs.get("/", (req, res) => {
  res.json(logsArray);
});

// POST ✓ adds new log to end of logs array ---v
logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.send(logsArray);
});

//  GET ✓ sends the corresponding log when a valid index is given --v
logs.get("/:index", (req, res) => {
  const { index } = req.params;
  
  if (logsArray[index]) {
    res.json(logsArray[index]);
  } else {
    res.status(404).json({ error: "Page Not Found" });
  }
});


module.exports = logs;
