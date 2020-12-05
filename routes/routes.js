const express = require("express");
const router = express.Router();
const UsuarioBO = require("../models/validations/UsuarioBO");

router.get("/", (req, res) => {
    res.render('index');
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
router.post("/cadastrar", UsuarioBO.gravarUsuario);

module.exports = router;