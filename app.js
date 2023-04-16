

const express = require('express');;
const logsController = require('./controllers/logsController.js');
const app = express()
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Captain's Log!");
  });

//mount the logs controller. app.use() is a method that mounts middleware functions at the path specified. In this case it mounts the logsController at the path /logs including all of the routes defined in the logsController.
app.use("/logs", logsController);

app.get("*", (req, res) => {
    res.json("Page not found");
  });



module.exports = app;