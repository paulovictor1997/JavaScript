/*
 json.stringify - Ele faz o inverso do json.parse, pega um json e transforma em um string.
*/

const dados = {nome:'paulo', idade:24}
pessoa = JSON.stringify(dados);
console.log(pessoa);
