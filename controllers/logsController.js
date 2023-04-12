const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log");

// INDEX all logs
logs.get("/", (req, res) => {
    res.json(logsArray);
});

// CREATE - add a new log
logs.post("/", (req, res) => {

    logsArray.push(req.body);
    res.status(201).json(logsArray[logsArray.length - 1]);
});

// SHOW - get one log
logs.get("/:index", (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
        res.json(logsArray[index]);
    } else {
        res.redirect("/logs").status(404).json({error: "Log Not Found"});
    }
});

// DELETE - delete one log
logs.delete("/:index", (req, res) => {
    const { index } = req.params
    const deletedLog = logsArray.splice(index, 1);
    res.status(200).json(deletedLog);
});

module.exports = logs;