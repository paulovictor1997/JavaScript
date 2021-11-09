/*
padEnd - Pega dois parâmetros, o primeiro, a quantidade de caracteres para ser pego, o segundo parâmetro, vai ser para o caractere que irá substitui-lo, exemplo :

Nesse exmplo, eu coloquei nove caracteres, a partir daí, seu eu não digitar nada, tudo que tiver a frente do número 5, será substituido pelo "*".

let numero = '5';
console.log(numero.padEnd(9,'*'));


-------------------------------------------------------

padStart - Faz o mesmo do padEnd, só que ele ira funcionar ao contrário, tudo o que tiver antes do número 5, será substituído pelo "*", exemplo :

let numero = '5';
console.log(numero.padStart(9,'*'));
*/

//Exemplo prático

let cartao = '1234123412341234';
let ultimo = cartao.slice(-4);
let cartaoMascarado = ultimo.padStart(16,'*');
console.log(`Confirme seu cartão : ${cartaoMascarado}`);