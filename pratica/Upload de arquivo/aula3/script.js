const mostrar = () =>{
    let imagens = document.getElementById('imagem').files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagens);
    img.width = 200;

    document.getElementById('area').appendChild(img);
}