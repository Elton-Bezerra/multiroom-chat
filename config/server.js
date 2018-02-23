/* Importar os módulos
    1. do framework express/
    2. consign/
    3. bodyParser/
    4. express-validator
*/
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

//iniciar o objeto express
var app = express();

//setar as variáveis 'view engine' e a 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Configurar o middleware -> express.static->body-parser->express-validator
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

//efetua o autoload das rotas, models, controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);
//exporta o objeto app
module.exports = app;