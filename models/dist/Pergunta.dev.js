"use strict";

var Sequelize = require("sequelize");

var connection = require("../database/database");

var Pergunta = connection.define('pergunta', {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}); //criar a tabela, caso nao exista

Pergunta.sync({
  force: false
}).then(function () {
  console.log("Tabela criada com sucesso");
});
module.exports = Pergunta;