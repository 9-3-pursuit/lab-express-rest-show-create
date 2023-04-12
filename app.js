// DEPENDENCIES
const express = require("express");
const logsController = require("./controllers/logsController");

// CONFIGURATION
const app = express();
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the captain's log");
});

app.use("/logs", logsController);


// EXPORT
module.exports = app;
