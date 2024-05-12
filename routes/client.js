const express = require('express')
const { registerClient, loginClient, getClient, getAllClients, updateClient, updatePasswordClient } = require('../controllers/client.js')
const { protected } = require('../middelware/auth.js')

const router = express.Router()

router.post('/register', registerClient)
router.post('/login', loginClient)
router.get('/', getAllClients)
router.get('/one', protected, getClient)
router.patch('/update', protected, updateClient)
router.patch('/update-password', protected, updatePasswordClient)

module.exports = router