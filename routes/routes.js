const UsuarioBO = require("../models/validations/UsuarioBO");
const ProdutoBO = require("../models/validations/ProdutoBO");
const express = require("express");
const router = express.Router();


// Páginas //
router.get("/", (req, res) => {
    ProdutoBO.findAll(req,res);
});

router.get("/sobre", (req, res) => {
    res.render("sobre");
});

router.get("/login", (req, res) => {
    res.render('login');
});

router.get("/cadastro", (req, res) => {
    res.render('cadastro');
});

// Envios //
router.post("/logar", UsuarioBO.logarUsuario);
router.post("/cadastrar", UsuarioBO.save);

module.exports = router;