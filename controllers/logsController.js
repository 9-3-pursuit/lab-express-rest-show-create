const express = require("express");
const logsController = express.Router();
const logsArray = require("../models/log");
const { logValidator } = require("../models/validators");

// create: add a new log
logsController.post("/", logValidator, (req, res) => {
    console.log("POST /logs", req.body);

    logsArray.push(req.body);
    res.status(201).json(logsArray[logsArray.length - 1]);
})

// index: all logs
logsController.get("/", (req, res) => {
    res.json(logsArray);
});

// show: get one log
logsController.get("/:index", (req, res) => {
    const { index } = req.params;
    console.log("GET /logs/:index", index);

    if (logsArray[index]) {
        res.json(logsArray[index]);
    } else {
        return res.redirect("/:index");
    }
});

// update: update log
logsController.put("/:index", logValidator, (req, res) => {
    const { index } = req.params;

    if (logsArray[index]) {
        logsArray[index] = req.body;
        res.status(200).json(logsArray[index]);
    } else {
        res.status(404).json({ "error": "Page not found" })
    }
});

// delete: delete log
logsController.delete("/:index", (req, res) => {
    const { index } = req.params;

    if (logsArray[index]) {
        const deletedLog = logsArray.splice(index, 1)
        res.status(200).json(logsArray);
    } else {
        res.status(404).json({ "error": "Page not found" })
    }
})

module.exports = logsController;