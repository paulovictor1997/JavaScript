/*
MAP - Cria um novo array, não modifica o array original e realiza às operações em ordem.

Callback - Função à ser executada em cada elemento.
thisArg(opcional), valor de "this" dentro da função de callback

Diferença entre Map e forEach - 
Map - Valor de retorno
forEach - Considere se o array auxiliar será necessário

Exemplo usando o map :

const numero = [2,4,6,8];

let multiplicao = numero.map((item)=> item*2);
console.log(multiplicao);

Exemplo usando o reduce :
const adicao = [2,5];
const soma = adicao.reduce((contador,numeros)=>{
    return contador + numeros;
})

console.log(`Soma entre ${adicao} é : ${soma}`);

*/


const lista = [
    {nome:'arroz',preco:20},
    {nome:'cereal',preco:12},
    {nome:'salsicha',preco:10}
]

const saldoTotal = 100;

function calulaSaldo (saldoTotal,lista){
    return lista.reduce(function(prev,current){
        console.log(prev)
        console.log(current)
        return prev - current.preco;
    },saldoTotal)
}

console.log(calulaSaldo(saldoTotal,lista));