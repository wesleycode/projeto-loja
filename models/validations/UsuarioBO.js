const UsuarioDAO = require("../../database/UsuarioDAO");

exports.save = (req, res) => {
    if (validarCadastro(req, res)) {
        UsuarioDAO.save(req, res);
    } else {
        res.status(401);
    }
};

exports.logarUsuario = (req, res) => {
    if (validarLogin(req, res)) {
        UsuarioDAO.login(req, res);
    } else {
        res.status(401);
    }
};

function validarLogin(req, res) {

    let errors = [];

    if (!req.body.email || typeof req.body.email === undefined) {
        errors.push({text: "Email inválido!"});
    }

    if (!req.body.senha || typeof req.body.senha === undefined) {
        errors.push({text: "Senha inválida!"});
    }

    if (errors.length > 0) {
        res.render("login", {error: errors});
        return false;
    }
    return true;
}

function validarCadastro(req, res) {

    let errors = [];

    if (!req.body.nome || typeof req.body.nome === undefined) {
        errors.push({text: "Nome inválido!"});
    }

    if (!req.body.email || typeof req.body.email === undefined) {
        errors.push({text: "Email inválido!"});
    }

    if (!req.body.data || typeof req.body.data === undefined) {
        errors.push({text: "Data inválida!"});
    }

    if (!req.body.sexo || typeof req.body.sexo === undefined) {
        errors.push({text: "Sexo inválido!"});
    }

    if (!req.body.senha || typeof req.body.senha === undefined) {
        errors.push({text: "Senha inválida!"});
    }

    if (errors.length > 0) {
        res.render("cadastro", {error: errors});
        return false;
    }
    return true;
}
