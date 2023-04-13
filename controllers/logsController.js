const express = require("express");
const logsController = express.Router();
const logsArray = require("../models/log");

logsController.get("/", (req, res) => {
    res.json(logsArray);
});

module.exports = logsController;