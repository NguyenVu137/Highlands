const { Sequelize } = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
})

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (e) {
        console.error('Unable to connect to database: ', e);
    }
}

module.exports = connectDB;
