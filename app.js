const express = require('express');
const cors = require('cors')
const app = express();


 const logsController = require("./controllers/logsController.js");


 app.use(express.json())
 app.use(cors()); 

app.get("/",(req,res)=> {
    res.send("Hello Welcome")
})



app.use("/logs", logsController);     

app.get("*", (req,res) => {
    res.status(400).json("Page Not Found")
})

module.exports = app;