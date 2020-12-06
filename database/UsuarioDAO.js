const Usuario = require("../models/Usuario");

exports.save = (req, res) => {
    Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        idade: req.body.idade,
        sexo: req.body.sexo,
    }).then(function () {
        res.status(200).send("Cadastrado");
    }).catch(function (err) {
        res.status(400).send(err);
    });
};

exports.login = (req, res) => {
    Usuario.findAll().then(function (usuario) {
        res.status(200).send({usr: usuario});
    });
    // Usuario.findOne().then().catch();
};