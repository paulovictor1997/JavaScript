//MESMO CÓDIGO USANDO O ASYNC E O AWAIT
const loadPosts = async () =>{
    document.getElementById('posts').innerHTML = 'CARREGANDO...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json()
    montarblog(json);
}

const montarblog = (lista) => {
    let html = '';

    for(let i in lista){
        html+= `<h3>${lista[i].title}</h3>`;
        html+= `${lista[i].body}<br/>`;
        html+= '<hr/>';
    }
    
    document.getElementById('posts').innerHTML = html;
}