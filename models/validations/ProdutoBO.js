const ProdutoDAO = require("../../database/ProdutoDAO");

exports.save = (req, res) => {
    if (validateSave(req, res)) {
        ProdutoDAO.save(req, res);
    } else {
        res.status(401);
    }
};

exports.findAll = (req,res) => {
    ProdutoDAO.findAll(req,res);
}

function validateSave(req, res) {

    let errors = [];

    if (!req.body.nome || typeof req.body.nome === undefined) {
        errors.push({text: "Nome inválido!"});
    }

    if (!req.body.valor || typeof req.body.valor === undefined) {
        errors.push({text: "Valor inválido!"});
    }

    if (!req.body.quantidade || typeof req.body.quantidade === undefined) {
        errors.push({text: "Quantidade inválida!"});
    }

    if (errors.length > 0) {
        res.render("index", {error: errors});
        return false;
    }
    return true;
}
