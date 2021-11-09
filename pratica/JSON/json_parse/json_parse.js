/* 
Json.parse - Podemos passar uma json que está em string, para transforma-lo, em variáveis. Na teoria o json vem em string.
*/

let pessoa = '{"nome":"paulo","idade":24}';
pessoa = JSON.parse(pessoa)
console.log(pessoa);