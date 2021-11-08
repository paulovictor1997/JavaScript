/*
const adicionar = (...numero) =>{
    console.log(numero);
}
adicionar(1,2,3)
-----------------------
const adicionar = (...nome) =>{
    console.log(nome);
}
adicionar('paulo','victor','feitosa','nunes');
*/

const adicionar = (nome, ...novoNome) =>{
    let novoConjunto = [
        ...nome,
        ...novoNome
    ]
    return novoConjunto;
}

let nome = ['paulo','victor'];
let outro = adicionar(nome,'feitosa','nunes');
console.log(outro)