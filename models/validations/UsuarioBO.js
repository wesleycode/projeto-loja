const Usuario = require("../Usuario");

exports.gravarUsuario = (req, res) => {
    console.log(req.body.nome);
    console.log(req.body.email);
    console.log(req.body.data);
    console.log(req.body.sexo);
    console.log(req.body.senha);
    Usuario.sync({force: true}).then(function () {
        Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            idade: req.body.idade,
            sexo: req.body.sexo,
        }).then(function () {
            res.status(200).send("Cadastrado");
        }).catch(function () {
            res.status(400).send("Rosca!");
        });
    });
};

exports.logarUsuario = (req, res) => {
    console.log(req.body.email);
    console.log(req.body.senha);
    res.status(200).send("Chegou");
}
