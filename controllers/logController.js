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
    // res.status(404).json({ error: "Not Found" });
    res.redirect("/logs")
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

/**
 * 
 * const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");
const { logValidator } = require("../models/validators.js");

// index - all bookmarks

logs.get("/", (req, res) => {
  console.log("GET /logs");
  res.json(logsArray);
});

// CREATE - - add a new log

logs.post("/", logValidator, (req, res) => {
  console.log("POST /logs", req.body);
  logsArray.push(req.body);
  res.status(201).json(logsArray[logsArray.length - 1]);
});

// SHOW - get one logs

logs.get("/:arrayIndex", (req, res) => {
  const { index } = req.params;
  console.log("GET /logs/:index", index);
  if (logsArray[index]) {
    res.json(logsArray[index]);
  } else {
    // res.status(404).json({ error: "Not Found" });
    res.redirect("/logs");
  }
});

// update
logs.put("/:index", logValidator, (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    logsArray[index] = req.body;
    res.status(200).json(logsArray[index]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// DELETE

logs.delete("/:arrayIndex", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    const deletedLogs = logsArray.splice(index, 1); // returns deleted log
    res.status(200).json(deletedLogs);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = logs;

 */