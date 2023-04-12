const express = require('express');
const logs = express.Router();
const logsController = require('../models/log.js');

logs.get('/', (req, res) => {
  res.send(logsController);
})

logs.get('/:index', (req, res) => {
  const { index } = req.params
  if(logsController[index]) {
  res.send(logsController[index]);
} else {
  res.redirect("/404")
} 
})

logs.post('/', (req, res) => {
  logsController.push(req.body);
  // console.log('POST/ctrlController', req.body);
  // res.status(201).json({ status: 201, message: "resource created" });
  res.json(logsController[logsController.length - 1]);
})

logs.put('/:index', (req, res) => {
    const { index } = req.params;
    if(logsController[index]) {
      logsController.splice(index, 0, req.body);
      res.status(200).json({ status: 200, message: "resource updated" });
    } else {
      res.redirect("/404")
    }
  })
logs.delete('/:index', (req, res) => {
  const { index } = req.params;
  if(logsController[index]) {
    logsController.splice(index, 1);
    res.status(200).json({ status: 200, message: "resource deleted" });
  } else {
    res.redirect("/404")
  }
})


module.exports = logs;