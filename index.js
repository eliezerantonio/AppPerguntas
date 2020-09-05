const express = require ('express');

const app = express ();

//dizendo para o express usar o EJS como view Engine
app.set ('view engine', 'ejs');
app.use (express.static ('public')); //import/habilitar arquivos staticos

//inicio rotas
app.get ('/', (req, res) => {
  res.render ('index');
});

app.get ('/perguntar', (req, res) => {
  res.render ('perguntar');
});

app.listen (8080, () => {
  console.log ('App rondando');
});
