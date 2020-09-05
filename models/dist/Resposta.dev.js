"use strict";

var Sequelize = require("sequelize");

var connection = require("../database/database");

var Resposta = connection.define('resposta', {
  corpo: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  perguntaId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
Resposta.sync({
  force: false
});
module.exports = Resposta;