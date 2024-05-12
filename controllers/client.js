const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const {Client} = require('../models')
const { where } = require('sequelize')

const registerClient = asyncHandler(async (req, res,next) => {
    const {nom,prenom,email,tel,password} = req.body

    if(!prenom || !email || !password){
        res.status(400)
        throw new Error('Remplissez les champs obligatoires.')
    }

    // check if client exists
    const oldUser = await Client.findOne({
        where: {
          email
        }})

    if(oldUser){
        res.status(400)
        throw new Error('un compte existe déjà avec cet email')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create client
    const client = await Client.create({
        nom,
        prenom,
        email,
        tel,
        password:hashedPassword
    })

    if(client){
        res.status(201).json({
            id:client.cli_id,
            nom:client.nom,
            prenom:client.prenom,
            email:client.email,
            token:generateToken(client.cli_id)
        })
    }else{
        res.status(400)
        throw new Error('Données du client invalides')
    }
})

const loginClient = asyncHandler(async (req, res, next) => {
    const {email,password} = req.body

    const client = await Client.findOne({where:{email}})

    //check pwd
    const validPwd = await bcrypt.compare(password, client.password)

    if(client && validPwd){
        res.status(200).json({
            id:client.cli_id,
            nom:client.nom,
            prenom:client.prenom,
            email:client.email,
            tel:client.tel,
            token:generateToken(client.cli_id)
        })
    }else{
        res.status(400)
        throw new Error('email ou mot de passe incorrect')
    }
})

const updateClient = asyncHandler(async(req, res, next) => {
    const {nom, postnom, prenom, tel} = req.body

    const updatedClient = await Client.update({nom,postnom,prenom,tel},{where:{cli_id:req.client.cli_id}})

    if(!updatedClient){
        res.status(403)
        throw new Error('Invalid data')
    }

    if(updatedClient){
        let updateDataClient = await Client.findByPk(req.client.cli_id)
        const {password,...others} = updateDataClient.dataValues
        res.status(200).json(others)
    }
    
})

const updatePasswordClient = asyncHandler(async(req,res,next)=>{
    const { oldPassword, newPassword} = req.body

    const client = await Client.findByPk(req.client.cli_id)

    const isValidPassword = await bcrypt.compare(oldPassword, client.password)

    if(!isValidPassword){
        res.status(400)
        throw new Error("Ancien mot de passe incorect !")        
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)

    await Client.update({password:hashedPassword}, {
        where:{
           cli_id:req.client.cli_id 
        }
    })

    return res.status(200).json({message:"Mot de passe modifié"})

})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
}

const getAllClients = asyncHandler(async (req, res) => {
    const clients = await Client.findAll()

    if(clients.length === 0){
        res.status(204).json(clients)
    }

    res.status(200).json(clients)
})

const getClient = asyncHandler(async (req, res) => {
    // const {id} = req.params
    const client = await Client.findByPk(req.client.cli_id)

    if(!client){
        res.status(400)
        throw new Error('Le client n\'existe pas')
    }

    const {password, ...others } = client?.dataValues

    res.status(200).json(others)
})

module.exports = {
    registerClient,
    loginClient,
    getClient,
    getAllClients,
    updateClient,
    updatePasswordClient
}