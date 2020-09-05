"use strict";

var express = require('express');

var app = express(); //dizendo para o express usar o EJS como view Engine

app.set('view engine', 'ejs');
app.use(express["static"]('public')); //import/habilitar arquivos staticos
//inicio rotas

app.get('/', function (req, res) {
  res.render('index');
});
app.get('/perguntar', function (req, res) {
  res.render('perguntar');
});
app.listen(8080, function () {
  console.log('App rondando');
});