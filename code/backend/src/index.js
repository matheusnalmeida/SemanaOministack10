/*
require é utilizado para pegarmos um determinado modulo e utilizarmos o mesmo no nosso programa. Podemos tambem utilizar
uma ferramenta mais nova chamada import, que tambem fara a mesma acao de importar modulos para o nosso programa porem de 
uma maneira um pouco diferente. O require somente consegue importar todo um arquivo de um determinado modulo, ja o import
consegue importar funcoes especificas do arquivo, sem a necessidade de importar todo o arquivo. Alem disso como o require 
funciona de forma dinamica, nos podemos passar variaveis como parametro contendo o nome do modulo a ser importado para
o programa, já com o import nao podemos passar variaveis pois o mesmo é estatico.
*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const http = require('http');
const routes = require('./routes');
const {setupWebSocket} = require('./websocket')


const app = express() ;
const server = http.Server(app)

setupWebSocket(server)

mongoose.connect('mongodb+srv://matheusnalmeida:matheus01@cluster0-1faya.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/*Definindo uma configuracao para todas as rotas do server(nesse caso fazendo com que o express entenda as requisicoes 
que tenham o corpo no formato json)
*/
app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());
app.use(routes);


server.listen(3333);