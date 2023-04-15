const express = require('express');
const app = express();


 const logsController = require("./controllers/logsController.js");



// "/" is equal to http://localhost:3333
app.get("/",(req,res)=> {
    res.send("Hello Welcome")
})
app.use(cors());
app.use(express.json())

// "/logs" is equal to http://localhost:3333/logs
app.use("/logs", logsController);     

app.get("*", (req,res) => {
    res.status(400).json("Page Not Found")
})

module.exports = app;