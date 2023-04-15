const express = require("express");
const cors = require("cors");
const app = express();

const logRouter = require("./controllers/logs.controller");
app.use(express.json());
app.use(cors());
app.use("/logs", logRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the captain's log!");
});

app.get("*/", (req, res) => {
  res.status(404).send({ error: "Resource not found" });
});

module.exports = app;
