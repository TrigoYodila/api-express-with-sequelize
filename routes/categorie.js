const express = require('express')
const { createCategorie, updateCategorie, removeCategorie, getCategories, getCategorie } = require('../controllers/categorie')

const router = express.Router()

router.post('/', createCategorie)
router.post('/update/:id', updateCategorie)
router.delete('/delete/:id', removeCategorie)
router.get('/all', getCategories)
router.get('/one', getCategorie)

module.exports = router
