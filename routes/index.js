const express = require('express')
const clientRouter = require('./client')
const produitRouter = require('./produits')
const commandeRouter = require('./commande')
const livraisonRouter = require('./livraison')
const fournisseurRouter = require('./livraison')


const router = express.Router()

router.use('/clients', clientRouter)
router.use('/commandes', commandeRouter)
router.use('/produits', produitRouter)
router.use('/livraisons', livraisonRouter)
router.use('/fournisseurs', fournisseurRouter)


module.exports = router