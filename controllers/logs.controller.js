const express = require("express");
const logRouter = express.Router();
const logArray = require("../models/log");

logRouter.get("/", (req, res) => {
  res.send(logArray);
});

logRouter.post("/", (req, res) => {
  logArray.push(req.body);
  res.status(201).send();
});

logRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const isValidIndex = logArray[id] !== undefined;
  if (isValidIndex) {
    res.send(logArray[id]);
  } else {
    res.redirect();
  }
});

logRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const isValidIndex = logArray[id] !== undefined;
  if (isValidIndex) {
    logArray[id] = req.body;
    res.status(202).send();
  } else {
    res.redirect();
  }
});

logRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const isValidIndex = logArray[id] !== undefined;
  if (isValidIndex) {
    logArray.splice(id, 1);
    res.status(200).send(logArray);
  } else {
    res.redirect();
  }
});

module.exports = logRouter;
