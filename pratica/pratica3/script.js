function vermelho(){
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}

function azul(){
    limpar();
    document.getElementById("titulo").classList.add('azul');
}

function verde(){
    limpar();
    document.getElementById("titulo").classList.add('verde');
}

const limpar = () =>{
    document.getElementById("titulo").classList.remove('vermelho');
    document.getElementById("titulo").classList.remove('azul');
    document.getElementById("titulo").classList.remove('verde');

}