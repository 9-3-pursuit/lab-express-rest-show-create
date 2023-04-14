//DEPENDENCIES 
const express = require("express")
const logsController = require("./controllers/logsController.js")

//CONFIGURATION
const app = express();
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Captain's Log")
});

app.use("/logs" , logsController);

//ERROR
app.get("*", (req, res) => {
    res.status(404).json({error : "Page Not Found"})
})

//EXPORT
module.exports = app;