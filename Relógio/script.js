function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    
    let data = new Date()
    
    let hora = data.getHours()
    
    let min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if(hora >=0 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#f1d9bf'
    }else if(hora >=12 && hora <=18){
        img.src = 'fototarde.png'
        document.body.style.background = '#d78853'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#0d3f48'
    }


}