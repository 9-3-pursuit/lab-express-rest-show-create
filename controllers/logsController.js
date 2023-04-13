const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");
const { logsValidator } = require("../validators/validators.js");

//Get all logs
logs.get("/", (req, res) => {
  let filteredLogs = logsArray;
  
  if (req.query.lastCrisis > 10) {
    filteredLogs = logsArray.filter((log) => log.daysSinceLastCrisis > 10)
  } else if (req.query.lastCrisis >= 20) {
    filteredLogs = logsArray.filter((log) => log.daysSinceLastCrisis > 20)
  } else if (req.query.lastCrisis <= 5) {
    filteredLogs = logsArray.filter((log) => log.daysSinceLastCrisis <= 5)
  };


  if (req.query.mistakes === "true") {
    filteredLogs = logsArray.filter((log) => log.mistakesWereMadeToday === true);
  } else if (req.query.mistakes === "false") { 
    filteredLogs = logsArray.filter((log) => log.mistakesWereMadeToday === false);
  };
  
  
  if (req.query.order === "asc") {
    filteredLogs.sort((a, b) => a.captainName.localeCompare(b.captainName));
  } else if (req.query.order === "desc") {
    filteredLogs.sort((a, b) => b.captainName.localeCompare(a.captainName));
  };
  res.json(filteredLogs);
});

//Create new log POST
logs.post("/", logsValidator, (req, res) => {
  console.log("POST /logs", req.body);
  logsArray.push(req.body);
  res.status(201).json(logsArray[logsArray.length - 1]);
});

//Get log by index and set up error handling
logs.get("/:index", (req, res) => {
  const { index } = req.params;
  console.log("GET /logs/:index", index);
  if (logsArray[index]) {
    res.json(logsArray[index]);
  } else {
    res.redirect(301, "/logs");
  }
});

//Update
logs.put("/:index", logsValidator, (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
  
      logsArray[index] = req.body
      res.status(200).json(logs[index])
    } else {
      res.status(404).json({error: "Not Found"})
    }
  });

 //Delete
 // Delete log by index
logs.delete("/:index", (req, res) => {
    const { index } = req.params;
  
    if (logsArray[index]) {
      const deletedLog = logsArray.splice(index, 1)[0];
      res.status(200).json(deletedLog);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });
  
  
  
  

module.exports = logs;
