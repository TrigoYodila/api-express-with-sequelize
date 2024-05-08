const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const { Client } = require("../models")


const protected = asyncHandler(async (req, res,next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get token in the header
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)

            //Get user 
            let client = await Client.findByPk(decoded.id)
           
            let {password, ...others} = client.dataValues

            req.client = others

            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Non autorisé')
        }
    }
    
    if(!token){
        res.json(401)
        throw new Error('Non autorisée, token invalide')
    }
})

module.exports = {protected}