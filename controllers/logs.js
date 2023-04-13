const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log");
const { validateURL } = require("../models/validations.js")


logs.get("/", (req, res) => {
    res.send(logsArray);
})

logs.get("/:arrayIndex", (req, res) => {
    if(logsArray[req.params.arrayIndex]) {
        res.json(logsArray[req.params.arrayIndex]);
    } else {
        res.redirect("/logs")
    }
})

logs.delete("/:arrayIndex", (req, res) => {
    if(logsArray[req.params.arrayIndex]) {
        const deletedLogs = logsArray.splice(req.params.arrayIndex, 1)
        res.status(200).json(deletedLogs);
    } else {
        res.status(404).json({error : "Not Found"})
    }
})

logs.put("/:arrayIndex", validateURL, async (req, res) => {
    if (logsArray[req.params.arrayIndex]) {
      logsArray[req.params.arrayIndex] = req.body;
      res.status(200).json(logsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
});

logs.post("/", (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
})

module.exports = logs;