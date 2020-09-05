const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/database")
const Pergunta = require("./models/Pergunta");



//dabase 
connection.authenticate().then(() => {
    console.log("Sucesso ao conectar");
}).catch(mgsErro => {
    console.log('erro ao conectar' + mgsErro);
});



//dizendo para o express usar o EJS como view Engine
app.set('view engine', 'ejs');
app.use(express.static('public')); //import/habilitar arquivos staticos

app.use(bodyParser.urlencoded({
    extended: false
})); //decodifica dos ados ecebido no formulario
app.use(bodyParser.json());

//inicio rotas
app.get('/', (req, res) => {
    Pergunta.findAll({
        raw: true,
        order: [
            ['id', 'DESC']
        ]
    }).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        });
    });

});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao

    }).then(() => {
        res.redirect("/")
    });
});

app.get("/pergunta:", (req, res) => {

    var id = req.params.id;
    Pergunta.findOne({
        where: {
            id: id
        }
    }).then(pergunta => {
        if (pergunta != undefined) { //pergunta achada

        } else {

        }
    });

});

//fim rotas

app.listen(8081, () => {
    console.log('App rondando');
});