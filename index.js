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
        const { titulo, conteudo} = req.params
        Post.create({
            titulo: titulo,
            conteudo: conteudo
        }).then(() => {
            res.redirect('/')
        }).catch((err) => {
            res.send('Houve um erro: ' + err.message)
        })
    })


    app.get('/deletar/:id', (req, res) => {
        const { id } = req.params
        Post.destroy({where: {'id': id}}).then(function(){
        res.send('Postagem deletada com sucesso!')
    }).catch(function(erro){
        res.send('Postagem inexistente')
    })
    })



    app.listen(3000, () => {
    console.log('Servidor rodando!!!!')
})

// npm install --save sequelize
// npm install --save mysql2  
// npm install --save express-handlebars
// npm install --save body-parser