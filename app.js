// DEPENDENCIES
const express = require("express");
const logsController = require("./controllers/logController.js");

// CONFIGURATION
const app = express();
app.use(express.json()); // json middleware parses incoming requests with JSON payloads

// ROUTES
app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.use("/logs", logsController);

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});

// EXPORT
module.exports = app;
