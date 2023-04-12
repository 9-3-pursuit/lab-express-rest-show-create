
const express = require("express");
const bodyParser = require("body-parser");
const logs = express.Router();
const logsArray = require("../models/log.js");



logs.get("/", (req, res) => { 
    res.send(logsArray);
  });

logs.post("/", (req, res) =>{
   //const newLog = req.body; 
    console.log(req.body)
    logsArray.push(req.body); 
    res.status(201).send(logsArray[logsArray.length-1])
})

logs.get("/:index", (req, res) => {
    const {index} = req.params;
    if(index < 0 || index >= logsArray.length){
        res.redirect("/");
    }else{
        res.send(logsArray[index])
    } 
})

logs.delete("/:index", (req, res)=>{
    const {index} = req.params;
    logsArray.splice(index,1);
    res.status(204).send(); 
})


  module.exports = logs;