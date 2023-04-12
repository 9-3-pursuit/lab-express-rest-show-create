const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log");

// GET ✓ sends the logs array --v
logs.get("/", (req, res) => {
  res.json(logsArray);
});

//  GET ✓ sends the corresponding log when a valid index is given --v
logs.get("/:index", (req, res) => {
  const { index } = req.params;
  
  if (logsArray[index]) {
    res.json(logsArray[index]);
  } else {
    
    // v --res.redirect() function redirects to the URL derived from the specified path, with specified status, an integer (positive) which corresponds to an HTTP status code. 
    //The default status is “302 Found”. 
    res.redirect("/logs"); 
  }
});

// POST ✓ adds new log to end of logs array ---v
logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.send(logsArray);
});




module.exports = logs;
