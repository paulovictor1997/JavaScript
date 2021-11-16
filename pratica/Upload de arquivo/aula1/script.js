const enviar = async () =>{
   //Elementos de arquivo, se pode usar o elemento files
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();
    //mando aqui o que eu quero
    body.append('title','title2');
    body.append('arquivo',arquivo)
    
    let req = await fetch('link do site',{
        method:'POST',
        body:body,
        headers:{
           'Content-Type':'multpart/form-data' 
        }
    });
}

//Usando os métodos para pegar arquivos com requisição.