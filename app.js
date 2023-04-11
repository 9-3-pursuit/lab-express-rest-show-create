const express = require("express");
const app = express();
const logsController = require("./controllers/logsController")

// Mount the logs controller
app.use("/logs", logsController)

// Routes
app.get("/", (req, res) =>{
    res.send("Welcome to the captain's log 🏴‍☠️")
})

// Error handlng --v
app.get("*", (req, res) => {
    res.status(404).json({ error : "Page Not Found"})
})

// console.log("Hello")
module.exports = app;
