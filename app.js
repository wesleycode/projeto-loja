// Carregando modulos //
const handlebars = require('express-handlebars');
const express = require("express");
const bodyParser = require('body-parser');
const routes = require("./routes/routes");
var Usuario = require("./models/Usuario");
const app = express();

// Configurações //

// handlebars config //
app.engine('handlebars', handlebars({defaultLayout: 'layout'}))
app.set('view engine', 'handlebars');

// Importando bootstrap em formato estático//
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/font', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/js')); // redirect font font-awesome

// Body parser //
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas //
app.use('/', routes);

// Servidor //
app.listen(8080, function () {
    console.log("Rodando o servidor na porta 8080...");
});