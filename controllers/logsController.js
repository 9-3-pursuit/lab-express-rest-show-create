const express = require("express");
const logs = express.Router();
const logsArr = require("../models/log.js")
const { logsValidator } = require("../models/validator.js")
//INDEX
logs.get("/", (req, res) => {
   res.json(logsArr)
})
//SHOW - GET ONE ID
logs.get('/:index', (req, res) => {
    const { index } = req.params;
    if(logsArr[index]) {
        res.json(logsArr[index]);
    }else {
        res.redirect("/").status(404).json({error: "Log Not Found"})
    }
})

//CREATE 
logs.post("/", logsValidator, (req, res) => {
    logsArr.push(req.body);
    res.status(201).json(logsArr[logsArr.length - 1]);
});

//UPDATE
logs.put("/:index", logsValidator, (req, res) => {
    const { index } = req.params;
    if(logsArr[index]){
        logsArr[index] = req.body
        res.status(200).json(logsArr[index])
    }else {
        res.status(400).json({error: "Not Found"})
    }
})

//DELETE
logs.delete("/:index", (req, res) => {
    const {index} = req.params;
    if (logsArr[index]){
        const deletedLog = logsArr.splice(index, 1);
        res.status(200).json(deletedLog);
    }else {
        res.status(400).json({error: "Not Found"})
    }
});


//EXPORT
module.exports = logs;