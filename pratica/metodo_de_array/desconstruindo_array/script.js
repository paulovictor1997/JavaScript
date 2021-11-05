/*
let info = ['paulo victor','paulo','victor','@paulo.victor.97'];
let [nomeCompleto,nome,sobrenome,instagram] = info;
//Nesse caso se coloca nome no array
console.log(nomeCompleto,nome,sobrenome,instagram);

//A desconstrução tem que ser feita na ordem do array, caso queira pular um elemento:
let [nomeCompleto, , , instagram] = info;
console.log(nomeCompleto,instagram);
*/

/*
//Outra forma de ser feita/caso se bote um valor padrão
let [nome,sobrenome,idade=24] = ['paulo','victor'];
console.log(nome,sobrenome,idade);
*/

/*
Desconstruindo através de uma função : 
    function criar () {
    return [1,2,3];
}
let numero = criar();
let [a,b,c] = numero;
console.log(a,b,c);
*/

