const express = require('express')
const { registerClient, loginClient, getClient, getAllClients } = require('../controllers/client.js')
const { protected } = require('../middelware/auth.js')

const router = express.Router()

router.post('/register', registerClient)
router.post('/login', loginClient)
router.get('/', getAllClients)
router.get('/:id', protected, getClient)

module.exports = router