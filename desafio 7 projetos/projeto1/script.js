document.body.addEventListener('keyup',(event)=>{
    playSound(event.code.toLocaleLowerCase());
    //Keyup - Serve para quando a gente "soltar" uma tecla do teclado.
});

document.querySelector('.composer button').addEventListener('click',()=>{
    let song = document.querySelector('#input').value;
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
    //Aqui estou fazendo um Array, para armazenar os dados do que forem digitados, para poder fazer a composição.
});

function playSound(sound){
    //Com as templates strings, conseguimos fazer com que a variavel identifique o atributo.
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key = "${sound}"]`);

    if(audioElement){
        //Com esse comando, quando se tocar a letra mais de uma vez, ele irá zerar o time do áudio.
        audioElement.currentTime = 0 ;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300)
    
    }
}

function playComposition(songArray){
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)
        },wait)
        wait += 250;
        //função para fazer um loop, para que ele não toque todos os comandos de uma vez.
    }
}