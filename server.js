const express = require('express')
// const bodyParser = require('body-parser')  
const apiRoutes = require('./routes/index.js')
const { errorHandler } = require('./middelware/error')
const { connectDB } = require("./config/db.js")
require('dotenv').config()

connectDB()
const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use(bodyParser.json())

app.use('/api', apiRoutes)

//global manage error
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
