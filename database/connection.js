const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = new Sequelize('teste', process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});

console.log("Conectando no Database...");

sequelize.authenticate().then(() => {
    console.log("Conectado no banco de dados...");
}).catch((e) => {
    console.log("Falha ao conectar-se no banco de dados: " + e);
});

module.exports = {sequelize, Sequelize, Model };
