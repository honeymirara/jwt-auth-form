const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./controller/user.controller')
const api = require('./controller/api.controller') 

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/api', api) 

app.use((err, req, res, next) => res.send(err.message))

module.exports = app