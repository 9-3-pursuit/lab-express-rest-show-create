// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const logController = require("./controllers/logController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors()); // enable CORS
app.use(express.json()); // parse incoming JSON data
app.use("/logs", logController); // mount logController at /logs

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
