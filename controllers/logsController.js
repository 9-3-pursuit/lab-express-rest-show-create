const express = require('express');

const logs = express.Router();

const logsControllerArr = require('../models/log.js');

logs.get('/', (req, res) => {
  res.send(logsControllerArr);
});

logs.get('/:index', (req, res) => {
  const { index } = req.params
  if (logsControllerArr[index]) {
  res.send(logsControllerArr[index]);
    } else {
  res.redirect("/404")
    } 
});

logs.post('/', (req, res) => {
  logsControllerArr.push(req.body);
  // console.log('POST/logsControllerArr', req.body);
  // res.status(201).json({ status: 201, message: "resource created" });
  res.json(logsControllerArr[logsControllerArr.length - 1]);
})

logs.delete('/:index', (req, res) => {
  const { index } = req.params;
  if(logsControllerArr[index]) {
    logsControllerArr.splice(index, 1);
    res.status(200).json({ status: 200, message: "resource deleted" });
  } else {
    res.redirect("/404")
  }
});

logs.put('/:index', (req, res) => {
    const { index } = req.params;
    if (logsControllerArr[index]) {
      logsControllerArr.splice(index, 0, req.body);
      res.status(200).json({ status: 200, message: "resource updated" });
    } else {
      res.redirect("/404")
    }
  });

module.exports = logs;
