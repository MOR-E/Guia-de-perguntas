//sempre que criar um model, criar ele com a primeira letra maiscula para diferenciar ele
const Sequelize = require("sequelize");
const conection = require("./database");

const Resposta = conection.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    }, perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }     
}); 

Resposta.sync({force: false});

module.exports = Resposta;