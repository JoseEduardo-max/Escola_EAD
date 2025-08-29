const dotenv = require('dotenv')
dotenv.config()

const { Sequelize } = require('sequelize')

const connection = new Sequelize({

    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: "mysql"
    
})

module.exports = connection;