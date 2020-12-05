const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = new Sequelize('teste', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

console.log("Conectando...");

sequelize.authenticate().then(() => {
    console.log("Conectado no banco de dados...");
}).catch((e) => {
    console.log("Falha ao conectar-se no banco de dados: " + e);
});

module.exports = {sequelize, Sequelize, Model };
