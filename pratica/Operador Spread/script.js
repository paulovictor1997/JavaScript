/*
let info = {
    nome:'Paulo',
    sobrenome:'Victor',
    idade:24
};

let newInfo = {
    ...info,
    cidade:'Maceió',
    estado:'Alagoas',
    pais:'Brasil'
}

console.log(newInfo);
*/

function adicionarInfo(info){
    let novaInfo = {
        ...info,
        status:0,
        cadastro:1111
    }
    return novaInfo;
}

console.log(adicionarInfo({nome:'Paulo',sobrenome:'Victor'}));