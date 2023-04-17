// DEPENDENCIES
const express = require("express");
const logController = require("./controllers/logController");

// CONFIGURATION
const app = express();

app.use(express.json());
app.use("/logs", logController);

// ROUTE HANDLERS
const rootHandler = (req, res) => {
  res.send("Welcome to the Captain's Log!");
};

const errorHandler = (req, res) => {
  res.send("No page found");
};

const notFoundHandler = (req, res) => {
  res.status(404).redirect("/error");
};

// ROUTES

app.get("/", rootHandler);
app.get("/error", errorHandler);
app.get("*", notFoundHandler);

// EXPORTS
module.exports = app;
