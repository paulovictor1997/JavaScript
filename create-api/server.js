// PEGAR O EXPRESS E HABILITANDO O CORS
const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(cors())


//CRIANDO A ROTA PARA ACESSAR A API

//QUANDO COLOCAR NO CONSOLE PARA ACESSAR O LOCAL HOST, ELE IRÁ ENTRAR NESSA FUNÇÃO :
app.get('/', async(req, res) => {
    //RESPONSE É A RESPOSTA DO AXIOS MAS EU TIRO O DATA DE DENTRO DO RESPONSE
    const {data} = await axios('https://jsonplaceholder.typicode.com/users');
    console.log(data);
  
    //CONSUMINDO NO BACKEND
    return res.json(data)

    //CONSUMINDO NO FRONTEND :
    //return res.json([
    //    {name : 'paulo'},
    //    {name : 'victor'}
    //])
});

//LOCAL HOST, NO CONSOLE  : location.href = "http://localhost:4567/"
app.listen('4567');


//npx lite-server - É UM TIPO DE LEITURA AUTOMÁTICO DO NOSSO INDEX, POR CAUSA DO BROWSERSYNC, ONDE TODA VEZ QUE ELE FOR ALTERADO ELE IRÁ ATUALIZAR O SERVER.