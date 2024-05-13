const asyncHandler = require('express-async-handler')
const { Categorie} = require('../models')

const createCategorie = asyncHandler(async(req,res,next)=>{
    const {libelle} = req.body

    if(!libelle){
        res.status(400)
        throw new Error('Remplissez le libelle de la categorie')
    }

    const oldCategorie = await Categorie.findOne({where:{
        libelle
    }})

    console.log("old ", oldCategorie)

    if(oldCategorie){
        res.status(400)
        throw new Error('La catégorie existe déjà')
    }

    const categorie = await Categorie.create({
        libelle
    })

    if(!categorie){
        res.status(400)
        throw new Error('Categorie non créée')
    }

    res.status(201).json(categorie)

})

const updateCategorie = asyncHandler(async(req,res,next)=>{
    const { id } = req.params
    const {libelle} = req.body

    if(!libelle){
        res.status(400)
        throw new Error('Champ libelle requis')
    }

    const updatedCat = await Categorie.update({
        libelle
    }, {where:{cat_id:id}})

    if(!updatedCat){
        res.status(400)
        throw new Error('Mise à jour echouée')
    }

    const newCategorie = await Categorie.findByPk(id)
    res.status(200).json(newCategorie)
})

const removeCategorie = asyncHandler(async(req,res,next)=>{
    const { id } = req.params

    const deletedCat = await Categorie.destroy({
        where:{
            cat_id:id
        }
    })

    if(!deletedCat){
        res.status(400)
        throw new Error('Erreur de suppression')
    }

    res.status(200).json({message:'suppression reussie'})
})

const getCategories = asyncHandler(async(req,res)=>{

    const categories = await Categorie.findAll()

    if(!categories){
        res.status(400)
        throw new Error('Requête echouée')
    }

    res.status(200).json(categories)
})

const getCategorie = asyncHandler(async(req, res) => {

})

module.exports = {
    createCategorie,
    updateCategorie,
    removeCategorie,
    getCategories,
    getCategorie
}