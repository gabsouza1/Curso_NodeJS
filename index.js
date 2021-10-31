var express = require('express');
var app = express();
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const Post = require('./models/Posts');

//Configurando o handlesbars
    //Config
        //Template Engine
        app.engine('handlebars', handlebars({ defaultlayout: 'main'}))
        app.set('view engine', 'handlebars');

    //BodyParser
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json())

//Rotas


    app.get('/', (req, res) => {
        Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
            res.render('home', {posts: posts});
        })

    })

    app.get('/cad', (req, res) => {
        res.render(__dirname + '/views/layouts/formulario')
    })


    app.post('/add', (req, res) => {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() => {
            res.redirect('/')
        }).catch((err) => {
            res.send('Houve um erro: ' + err.message)
        })
    })




    app.listen(3000, () => {
    console.log('Servidor rodando!!!!')
})

// npm install --save sequelize
// npm install --save mysql2  
// npm install --save express-handlebars
// npm install --save body-parser