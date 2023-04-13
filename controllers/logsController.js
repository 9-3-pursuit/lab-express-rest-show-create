
const express = require("express");
const bodyParser = require("body-parser");
const logs = express.Router();
const logsArray = require("../models/log.js");


// all logs 
logs.get("/", (req, res) => { 
    res.send(logsArray);
  });

// adding new data into logs array 
logs.post("/", (req, res) =>{
   const newLog = req.body; 
    console.log(req.body)
    logsArray.push(req.body); 
    res.status(201).send(logsArray[logsArray.length-1])
})

// get log at specific index 
logs.get("/:index", (req, res) => {
    const {index} = req.params;
    if(index < 0 || index >= logsArray.length){
        res.redirect("/");
    }else{
        res.send(logsArray[index])
    } 
})

// updating logs array data at specific index 
logs.put("/:index", (req, res) => {
    const { index } = req.params;
    const updatedLog = req.body;
  
    if (index < 0 || index >= logsArray.length) {
      res.status(404).send("Invalid index");
    } else {
      logsArray[index] = updatedLog;
      res.send(logsArray[index]);
    }
  });

// deleting data at specific index 
logs.delete("/:index", (req, res)=>{
    const {index} = req.params;
    logsArray.splice(index,1);
    res.status(204).send(); 
})


  module.exports = logs;