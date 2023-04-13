const express = require("express");
const logs = express.Router();
const logsArray = require("../models/captain-models.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.status(201).json(logsArray[logsArray.length - 1]);
})

logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    res.json(logsArray[index])
  } else {
    res.redirect("/")
  }
})

logs.delete("/:index", (req, res) => {
  const { index } = req.params;
  const deletedLog = logsArray.splice(index,1);
  res.status(200).json(logsArray)
})

module.exports = logs;