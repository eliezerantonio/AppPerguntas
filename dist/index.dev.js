"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var connection = require("./database/database");

var Pergunta = require("./models/Pergunta"); //dabase 


connection.authenticate().then(function () {
  console.log("Sucesso ao conectar");
})["catch"](function (mgsErro) {
  console.log('erro ao conectar' + mgsErro);
}); //dizendo para o express usar o EJS como view Engine

app.set('view engine', 'ejs');
app.use(express["static"]('public')); //import/habilitar arquivos staticos

app.use(bodyParser.urlencoded({
  extended: false
})); //decodifica dos ados ecebido no formulario

app.use(bodyParser.json()); //inicio rotas

app.get('/', function (req, res) {
  Pergunta.findAll({
    raw: true,
    order: [['id', 'DESC']]
  }).then(function (perguntas) {
    res.render('index', {
      perguntas: perguntas
    });
  });
});
app.get('/perguntar', function (req, res) {
  res.render('perguntar');
});
app.post('/salvarpergunta', function (req, res) {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(function () {
    res.redirect("/");
  });
});
app.get("/pergunta:", function (req, res) {
  var id = req.params.id;
  Pergunta.findOne({
    where: {
      id: id
    }
  }).then(function (pergunta) {
    if (pergunta != undefined) {//pergunta achada
    } else {}
  });
}); //fim rotas

app.listen(8081, function () {
  console.log('App rondando');
});