const express = require('express')
const log = express.Router()
const logArray = require('../models/log')

log.get('/', (request, response) => {
    response.send(logArray)
})

log.post('/', (request, response) => {
    logArray.push(request.body)
    response.json(logArray[logArray.length-1])
})

log.get("/:index", (request, response) => { 
    const { index } = request.params;
    console.log('index',index)
    if (logArray[index]) {
        response.json(logArray[index])
    } else {
        response.redirect('/logs')
    }
});

log.delete('/:index', (request, response) => {
    const { index } = request.params
    if(logArray[index]) {
        const deletedLog = logArray.splice(index, 1)
        response.status(200).json(deletedLog)
    } else {
        response.status(404)
    }
})



  
module.exports = log