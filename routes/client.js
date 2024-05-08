const express = require('express')
const { registerClient, loginClient, getClient, getAllClients, updateClient } = require('../controllers/client.js')
const { protected } = require('../middelware/auth.js')

const router = express.Router()

router.post('/register', registerClient)
router.post('/login', loginClient)
router.get('/', getAllClients)
router.get('/one', protected, getClient)
router.patch('/update', protected, updateClient)

module.exports = router