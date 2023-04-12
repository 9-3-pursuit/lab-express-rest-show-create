const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");
const { logValidator } = require("../models/validators.js");

//POST /

//index - all bookmarks
logs.get("/", (req, res) => {
  res.json(logsArray);
});

//creat - add a new bookmark
logs.post("/", logValidator, (req, res, next) => {
    //check that the req.body has the required keys and no additional data
    if(req.body.hasOwnProperty("captainName") && req.body.hasOwnProperty("title")){
      next()
    } else {
      return res.status(400).json({error: "logs must contain a captainName and a title"})
  
    }
  
  
    // if so, call next!
    // otherwise, send a 400 error with a helpful message
  } , (req,res) => {
    console.log("POST /logs", req.body);
  
    //in the future, a sql Database will replace this array
    logsArray.push(req.body)
    res.status(201).json(logsArray[logsArray.length - 1]);
  });
  
  
  //show - get one
  logs.get("/:index", (req, res) => { //logs/:index
      const { index } = req.params;
      console.log("GET /logs/:index", index);
      
      if(logsArray[index]) {
        res.json(logsArray[index]);
      } else {
      res.status(404).json({error: "Log Not Found"})
  
    }
  });

module.exports = logs;