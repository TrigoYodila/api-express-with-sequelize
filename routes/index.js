const express = require('express')
const clientRouter = require('./client.js')


const router = express.Router()

router.use('/users', clientRouter)

module.exports = router