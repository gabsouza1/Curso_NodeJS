var express = require('express');
var app = express();
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');

//Configurando o handlesbars
    //Config
        //Template Engine
        app.engine('handlebars', handlebars({ defaultlayout: 'main'}))
        app.set('view engine', 'handlebars');

    //BodyParser
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json())

//Rotas

    app.get('/cad', (req, res) => {
        res.render(__dirname + '/views/layouts/formulario')
    })


    app.post('/add', (req, res) => {
        res.send(`TEXTO: ${req.body.titulo} CONTEUDO: ${req.body.conteudo}`)
    })




    app.listen(3000, function(){
    console.log('Servidor rodando!!!!')
})

// npm install --save sequelize
// npm install --save mysql2  
// npm install --save express-handlebars
// npm install --save body-parser