const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const userRouter = require('./controller/user.controller')
const api = require('./controller/api.controller')


const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,

}))

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/api', api)

app.use((err, req, res, next) => res.send(err.message))

module.exports = app