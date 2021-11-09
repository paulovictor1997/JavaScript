/*
 É uma sintaxe de objeto, que é usado para fazer requisições, tanto para enviar e receber informação. Detalhe : pode se guardar várias informações.
*/

const pessoa = {
    nome:'Paulo Victor',
    idade:24,
    caracteristica:['alto','top'],
    moradia:{
      estado:'Alagoas',
      cidade:'Maceió'  
    }
}

console.log(`Olá meu nome é ${pessoa.nome} tenho ${pessoa.idade} anos, meu estado é ${pessoa.moradia.estado}, e moro na cidade de ${pessoa.moradia.cidade}. Sou ${pessoa.caracteristica[1]}`);