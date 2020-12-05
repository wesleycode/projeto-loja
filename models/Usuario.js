const database = require('./../database/connection');
const sequelize = database.sequelize;

class Usuario extends database.Model {

}

Usuario.init({
    nome: {
        type: database.Sequelize.STRING
    },
    email: {
        type: database.Sequelize.STRING
    },
    senha: {
        type: database.Sequelize.STRING
    },
    idade: {
        type: database.Sequelize.DATE
    },
    sexo: {
        type: database.Sequelize.CHAR
    }
}, {
    sequelize,
    modelName: "Usuario"
});

module.exports = Usuario;

// Para criar a tabela no database -> Usuario.sync({force: true});