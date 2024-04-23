const fs = require("fs")
const csv = require('csv-parser')
const path = require('path')
var results = []
const { Client } = require('../models')

fs.createReadStream(path.resolve(__dirname,"../datas/clients.csv"))
    .pipe(csv({separator:"\n", headers:["client"]}))
    .on("data", (data) => {
        results.push(data)
    })
    .on("end", () => {
        results.map(async (element) => {
            let client = element.client.split(';')
            console.log("Data client ", client)
            await Client.create({
                nom:client[0],
                prenom:client[1],
                email:client[2],
                tel:client[3]
            })
        })
    })
