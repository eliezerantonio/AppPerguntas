"use strict";

var Sequelize = require('sequelize');

var connection = new Sequelize('guiaperguntas', 'eliezer', '1223', {
  host: 'localhost',
  dialect: 'mysql'
});
module.exports = connection;