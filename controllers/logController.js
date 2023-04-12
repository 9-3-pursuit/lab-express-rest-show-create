const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

// SHOW logs

logs.get("/:arrayIndex", (req, res) => {
  if (logsArray[req.params.arrayIndex]) {
    res.json(logsArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// CREATE

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

// DELETE

logs.delete("/:arrayIndex", (req, res) => {
    if(logsArray[req.params.arrayIndex]) {
        const deletedLogs = logsArray.splice(req.params.arrayIndex, 1)
        res.status(200).json(deletedLogs);
    } else {
        res.status(404).json({error : "Not Found"})
    }
})

module.exports = logs;