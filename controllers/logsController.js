const express = require("express");
const log = require("../models/log");
const logs = express.Router();
const logsArray = require("../models/log");
const logValidator  = require("../models/validators");

// INDEX all logs
logs.get("/", (req, res) => {
    res.json(logsArray);
});

// CREATE - add a new log
logs.post("/", logValidator, (req, res) => {

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

// UPDATE
logs.put("/:index", logValidator, (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
        logsArray[index] = req.body;
        res.status(200).json(logsArray[index]);
    } else {
        res.status(404).json({error: "Not Found"});
    }
});

// DELETE - delete one log
logs.delete("/:index", (req, res) => {
    const { index } = req.params
    if (logsArray[index]) {
        const deletedLog = logsArray.splice(index, 1);
        res.status(200).json(deletedLog);
    } else {
        res.status(404).json({error: "Not Found"});
    }
});

module.exports = logs;