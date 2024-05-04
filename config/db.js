const { Sequelize } = require('sequelize')
require('dotenv').config()

//config for connected to database
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER_NAME,
    process.env.PASSWORD,{
        host:process.env.HOST,
        dialect:process.env.DIALECT,
    }
)

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = {sequelize,connectDB}