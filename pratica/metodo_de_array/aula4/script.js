let lista = [
    {id:1, nome:'paulo', sobrenome:'victor'},
    {id:2, nome:'feitosa', sobrenome:'nunes'},
    {id:3, nome:'aaa', sobrenome:'bbb'},
];

let pessoa = lista.find((item) =>{
    return(item.id ==1)? true : false;
})

let res = pessoa;
console.log(res);

/*
let lista = [2,4,6,8,10];
let lista2 = [];
lista2 = lista.find((item) =>{
    return (item === 8) ? true : false;
})
let res = lista2;
console.log(` item encontrado : ${res}`);

//findIndex - retornar a posição do elemento.
*/