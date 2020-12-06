const Produto = require("../models/Produto");

exports.save = (req, res) => {
    Produto.create({
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

exports.findAll = (req, res) => {
    Produto.findAll().then((produto) => {
        console.log("All users:", JSON.stringify(produto, null, 2));
        res.render('index') // ,{pdt: produto});
    }).catch((error) => {
        console.log("ERRO: " + error);
    });
};