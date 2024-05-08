const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const { Client } = require("../models")


const protected = asyncHandler(async (req, res) => {
    // let token

    // if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    //     try {
    //         // Get token in the header
    //         token = req.headers.authorization.split(' ')[1]

    //         //verify token
    //         const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)

    //         //Get user 
    //         req.user = await Client.findByPk(decoded.id).select('-password')

    //         next()

    //     } catch (error) {
    //         res.status(401)
    //         throw new Error('Non autorisé')
    //     }
    // }
    
    // if(!token){
    //     res.json(401)
    //     throw new Error('Non autorisée, token invalide')
    // }

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token non fourni' });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
        return res.status(401).json({ message: 'Token invalide' });
        }

        req.user = decoded;
        next();
    });


})

module.exports = {protected}