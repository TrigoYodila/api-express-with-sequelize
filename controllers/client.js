const express = require('express')

const registerClient = (req, res,next) => {
    res.json({message:"Hello World !"})
}

module.exports = {
    registerClient
}