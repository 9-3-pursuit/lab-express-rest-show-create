const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log");
const { logsValidator } = require("../models/validators.js");
//index-all logs
logs.get("/", (req, res) => {
  res.json(logsArray);
});
// SHOW - get one
logs.get("/:index", (req, res) => {
    const { index } = req.params;
    if (logsArray[index]) {
      res.json(logsArray[index]);
    } else {
      res.redirect("/*");
    }
  });
  // CREATE
logs.post("/", logsValidator, (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
  });

  //UPDATE 
   logs.put("/:index", (req, res) => {
    const { index } = req.params;
if(logsArray[index]){
    logsArray[index] = req.body;
    res.status(200).json(logsArray[index]);
     
} else {
    res.status(404).json({error: "Not Found"});
}
});
//delete 
logs.delete("/:index", (req, res) => {
    const { index } = req.params;
    //const index = req.params.index(destructions)
    if (logsArray[index]){
        const deletedLog = logsArray.splice(index, 1);//return deleted log
        res.status(200).json(logsArray);
    } else {
        res.status(404).json({error: "Not Found"});
    }
});


  
  



  
  

module.exports = logs;