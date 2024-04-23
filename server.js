const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('./routes/users')

const app = express()

const dotenv = require('dotenv').config()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api/users', usersRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
