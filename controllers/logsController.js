const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");
const validators = require("../models/validator.js")


logs.get("/", (req, res) => {
    res.json(logsArray);
});

// get one show
logs.get("/:index", (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
        res.json(logsArray[index]);
    } else {
        res.redirect("/404");
    }
});
// create a new log with error message
logs.post("/", validators.logsValidator, (req, res) => {
    logsArray.push(req.body)
    res.status(201).json(logsArray)
});
// update
logs.put("/:index", validators.logsValidator, (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
        logsArray[index] = req.body
        res.status(200).json(logsArray[index]);
    } else {
        res.status(404).json({ error: "Not Found" })
    }
});
//delete
logs.delete("/:index", (req, res) => {
    const { index } = req.params;
    console.log(index)
    console.log(req.params)

    if (logsArray[index]) {
        const deletedlogs = logsArray.splice(index, 1); // returns deleted logs
        res.status(200).json(logsArray)
    } else {
        res.status(404).json({ error: "Not Found" });
    }
});


module.exports = logs