const express = require('express');
const logs = express.Router();

const ctrlController = require('../models/log.js');

logs.get('/', (req, res) => {
  res.send(ctrlController);
})

logs.get('/:index', (req, res) => {
  const { index } = req.params
  if(ctrlController[index]) {
  res.send(ctrlController[index]);
} else {
  res.redirect("/404")
} 
})

logs.post('/', (req, res) => {
  ctrlController.push(req.body);
  // console.log('POST/ctrlController', req.body);
  // res.status(201).json({ status: 201, message: "resource created" });
  res.json(ctrlController[ctrlController.length - 1]);
})

logs.delete('/:index', (req, res) => {
  const { index } = req.params;
  if(ctrlController[index]) {
    ctrlController.splice(index, 1);
    res.status(200).json({ status: 200, message: "resource deleted" });
  } else {
    res.redirect("/404")
  }
})


module.exports = logs;

