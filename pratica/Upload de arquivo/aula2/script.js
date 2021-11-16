const mostrar = () =>{
    let reader = new FileReader();
    let imagens = document.getElementById('imagem').files[0];

    reader.onloadend = () =>{
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(imagens); 
}

// FileReader - leitor de arquivo.


