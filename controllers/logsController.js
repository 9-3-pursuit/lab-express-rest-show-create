const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log");

// GET ✓ sends the logs array --v
logs.get("/", (req, res) => {
  res.json(logsArray);
});

//  GET --v
// ✓ sends the corresponding log when a valid index is given 
// ✓ sends a redirect when an invalid index is given
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

// DELETE ✓ deletes at the index in the logs array --v

logs.delete("/:index", (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
      const deletedLogs = logsArray.splice(index, 1); // returns deleted logs
      res.status(200).json(logsArray);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });








module.exports = logs;
