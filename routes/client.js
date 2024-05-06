const express = require('express')
const { registerClient, loginClient, getClient } = require('../controllers/client.js')


const router = express.Router()

router.post('/', registerClient)
router.post('/login', loginClient)
router.get('/:id', getClient)

module.exports = router