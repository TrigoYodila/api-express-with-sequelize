const express = require('express')
const { registerClient } = require('../controllers/client.js')

const router = express.Router()

router.post('/', registerClient)
router.post('/login', )

module.exports = router