/* 
    Callbacks - Quando uma função nos retorna algo que foi pedido.
*/

const alertar = () =>{
    console.log('OPA !!! Tudo bem !!!');
}

let nome = 'Paulo';
setTimeout(alertar,2000);
let sobrenome = 'Victor';
console.log(`NOME COMPLETO = ${nome} ${sobrenome}`);