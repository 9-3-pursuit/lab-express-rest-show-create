const express = require("express");
const app = express();
const logsController = require("./controllers/logsController.js")

app.use(express.json()) // for parsing application/json

app.use((req, res, next) => {
    ;
    next();
});

app.get('/', (req, res) => {
    res.send("Welcome to the Captain's Log!");
})

app.use('/logs', logsController);

app.get("*", (req, res) => {
    res.status(404).json({ error: "page not found" })
})

module.exports = app;
