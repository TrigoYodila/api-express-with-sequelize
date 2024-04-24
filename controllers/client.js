const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Client = require('../models/client')


const registerClient = asyncHandler(async (req, res,next) => {
    const {nom,prenom,email,tel,password} = req.body

    if(!prenom || !email || !password){
        res.status(400)
        throw new Error('Remplissez les champs obligatoires.')
    }

    // check if client exists
    const oldUser = await Client.findOne({email})

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
            id:client.usr_id,
            nom:client.nom,
            prenom:client.prenom,
            email:client.email,
            token:generateToken(client.usr_id)
        })
    }else{
        res.status(400)
        throw new Error('Données du client invalides')
    }
})

const loginClient = (req, res, next) => {

}

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
}

module.exports = {
    registerClient,
    loginClient
}