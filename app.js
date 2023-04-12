// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.get("/", (req, res) => {
    res.send("welcome to the captain's log");
  });

// EXPORT
module.exports = app;