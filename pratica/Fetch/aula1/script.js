const loadPosts = () =>{
    document.getElementById('posts').innerHTML = 'Carregando...'
    /* - Faz a requisição e espera o resultado
       - Quando tiver o resultado, retorna em json.
    */
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resultado){
        return resultado.json();
    })
    .then(function(json){
        //E quando tiver o resultado, ele será mostrado aqui.
        montarblog(json);
    })
    .catch(function(error){
        console.log(error)
    });
}

const montarblog = (lista) =>{
    let html = '';
    
    for(let i in lista){
        html+= `<h3>${lista[i].title}</h3>`;
        html+= `${lista[i].body}<br/>`;
        html+= '<hr/>';
    }
    
    document.getElementById('posts').innerHTML = html;
}

//GET - Onde às informações vão juntas com a url.
//POST - Onde mando internamente as requisições.
//FETCH - Vai retornar uma promise.