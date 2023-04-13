const express = require("express");
const logsArray = require("./models/log");
const logsController = require("./controllers/logsController")
const app = express();


app.get("/", (req, res) => {
    res.send("welcome to the captain's log");
});

app.use("/logs", logsController)

app.get("*", (req, res) => {
    res.status(404).json({ "error": "Page not found" })
})

module.exports = app;