const express = require('express')
const { registerClient } = require('../controllers/client.js')

const router = express.Router()

router.get('/', registerClient)

module.exports = router