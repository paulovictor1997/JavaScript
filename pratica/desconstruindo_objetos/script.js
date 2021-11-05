/*
let pessoa = {
    nome:'paulo',
    sobrenome:'victor',
    idade:24,
    social:{
        instagram:'paulo.victor.97'
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
}

//Desconstruir objetos é quando,podemos acessar informações específicas e guardar em variáveis.
let {nome:novoNome,sobrenome,idade} = pessoa;
console.log(novoNome,sobrenome,idade);
*/

//Pegando objeto dentro de outro objeto.
/*
let pessoa = {
    nome:'paulo',
    sobrenome:'victor',
    idade:24,
    social:{
        instagram:'paulo.victor.97'
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
}

let {nome,idade, social:{instagram}} = pessoa; 
console.log(nome,idade,instagram);
*/
/*
let pessoa = {
    nome:'paulo',
    sobrenome:'victor',
    idade:24,
    social:{
        facebook:'',
        instagram:{
            url:'paulo.victor.97',
            seguidores:400
        }
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
}
let{nome,idade,social:{instagram}} = pessoa;
console.log(nome,idade,instagram);
*/

let pessoa = {
    nome:'paulo',
    sobrenome:'victor',
    idade:24,
    social:{
        facebook:'',
        instagram:{
            url:'paulo.victor.97',
            seguidores:400
        }
    },
}

function pegarNomeCompleto(obj){
    let name = obj.nome;
    let sobrenome = obj.sobrenome;
    return `${name} ${sobrenome}`;
}

console.log(pegarNomeCompleto(pessoa));

//Aterando pelo próprio parâmetro
/*
function pegarNomeCompleto(nome,sobrenome){
    return `${nome} ${sobrenome} siga em ${social:{instagram:{url:instagram}}}`;
}
console.log(pegarNomeCompleto(pessoa));
*/