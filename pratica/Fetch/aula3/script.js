//FETCH COM POST

const inserirPost = async () =>{
    document.getElementById('posts').innerHTML = 'CARREGANDO...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title:'Titulo de teste',
            body:'Corpo de teste',
            userId:4
        }),

        headers:{
            'Contet-type':'application/json'
        }
    });
    let json = await req.json();
    console.log(json);
} 

//POST - Posso enviar dados atraves do corpo da requisição, são enviados internamente junto da requisição.