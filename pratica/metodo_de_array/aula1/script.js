let lista = ['metallica','megadeth','anthrax','slayer'];
//lista.push('iron maiden');
let res = lista.indexOf('slayer');
if(lista>-1){
    console.log('não encontrado');
}else{
    console.log(`encontrado na ${res}º posição`);
}

console.log(lista)

//join- separa os itens por um parâmetro colocado.
//indexOf-Serve para procurar um item no array.
//pop- deleta o último elemento do array.
//shift- deleta o primeiro elemento do array.
//push - adiciona um novo elemento no array