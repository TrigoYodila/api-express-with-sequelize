const express = require('express')
const { registerClient, loginClient } = require('../controllers/client.js')


const router = express.Router()

router.post('/', registerClient)
router.post('/login', loginClient)

module.exports = router