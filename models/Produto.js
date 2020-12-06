const database = require('./../database/connection');
const sequelize = database.sequelize;

class Produto extends database.Model {

}

Produto.init({
    nome: {
        type: database.Sequelize.STRING,
    },
    valor: {
        type: database.Sequelize.DOUBLE,
    },
    quantidade: {
        type: database.Sequelize.INTEGER,
    },
}, {
    sequelize,
    modelName: "Produto"
});

module.exports = Produto;

// Para criar a tabela no database -> Produto.sync({force: true});