const express = require('express')
const app = express()
app.use(express.json());

const logController = require('./controllers/logs')

app.get('/', (request, response) => {
    response.send('Hello World')
})

app.use('/logs', logController)

module.exports = app
