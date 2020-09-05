const Sequelize = require("sequelize");
const connection = require("../database/database")

const Pergunta = connection.define('pergunta', {

    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },

    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }


});

//criar a tabela, caso nao exista

Pergunta.sync({
    force: false
}).then(() => {
    console.log("Tabela criada com sucesso");
})

module.exports = Pergunta;