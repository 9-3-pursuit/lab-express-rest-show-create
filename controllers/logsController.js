const express = require("express");
const log = express.Router();
//express.Router() is a class that creates a new router object. That groups endpoints together.
const logsArray = require("../models/log.js");

log.get("/", (req, res) => {
  console.log("GET /log");

  res.json(logsArray);
});

log.get("/:index", (req, res) => {
  const { index } = req.params;
  console.log("GET /logs/:index", index);

  if (!logsArray[index]) {
    res.redirect({ error: "Log Not Found" });
  } else {
    res.json(logsArray[index]);
  }
});

log.post("/", (req, res) => {
  const newLog = req.body;
  console.log("POST /log", newLog);
  logsArray.push(newLog);
  res.json(req.body);
});

log.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    logsArray.splice(index, 1);
    res.json({ msg: "Log Deleted" });
  } else {
    res.redirect({ error: "Log Not Found" });
  }
});

module.exports = log;
