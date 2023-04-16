// DEPENDENCIES
const express = require("express");
const logsController = require("./controllers/logsController");
const cors = require("cors");

//CONFIGURATION
const app = express();
//middleware

app.use(express.json());//parse incoming json
app.use(cors());
// ROUTES
app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.use("/logs", logsController)
app.get("*", (req, res) => {
    res.status(404).json({error: "Sorry. page not found"});
});


// EXPORT
module.exports = app;