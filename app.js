const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});

module.exports = app;
