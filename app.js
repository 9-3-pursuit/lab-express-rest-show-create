const express = require("express");
const app = express();
const logController = require("./controllers/logs.js");

app.use(express.json());

app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
});

app.get("/", (req, res) => {
    res.send("welcome to the captain's log");
})

app.use("/logs", logController);

app.get("*", (req, res) => {
    res.status(404).send("Error")
})

module.exports = app; 