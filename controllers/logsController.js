const express = require('express');
const logsController = express.Router();


const logsArray = require("../models/log.js");  

logsController.get("/", (req, res) => {    
    res.send(logsArray);    
}); 

logsController.get("/:index", (req,res) => {
    const { index } = req.params

    if (logsArray[index]) {
        res.send(logsArray[index])
    } else {
        res.redirect("/400")
    }  
})


logsController.post('/', (req, res) => {
   
    logsArray.push( req.body);
    res.json(logsArray[logsArray.length - 1]);
  })

  logsController.put('/:index', (req, res) => {
    const { index } = req.params;
    if(logsArray[index]) {
      logsArray.splice(index, 0, req.body);
      res.status(200).json({ status: 200, message: "resource updated" });
    } else {
      res.redirect("/404")
    }
  })
  
  
  logsController.delete('/:index', (req, res) => {
    const { index } = req.params;
    if(logsArray[index]) {
      logsArray.splice(index, 1);
      res.status(200).json({ status: 200, message: "resource deleted" });
    } else {
      res.redirect("/404")
    }
  })

module.exports = logsController;