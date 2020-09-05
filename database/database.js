const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'eliezer', '1223', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;