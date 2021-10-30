//Eventos de clique

const clicou = () =>{
    const titulo = document.getElementById('titulo');
    titulo.innerHTML = 'funcionando';
    const button = document.getElementById('button');
    button.innerHTML = 'funciona';
}

const tirou = () =>{
    console.log('funciona')
}

//this - quando se está em um elemento específico, o "this" funciona como se estivesse pegando uma própria id

//onmouseover - Serve para quando o mouse fica sobre o elemento.
//onmouseout - Serve para quando se tira o mouse.

