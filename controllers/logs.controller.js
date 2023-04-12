const express = require("express");
const logRouter = express.Router();
const logArray = require("../models/log");

logRouter.get("/", (req, res) => {
  res.send(logArray);
});

module.exports = logRouter;
