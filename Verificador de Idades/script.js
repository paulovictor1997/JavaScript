function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados novamente !')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade < 10)
            //Criança
                img.setAttribute('src', 'criaçcamenino.png')
            else if(idade < 25){
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'adulto.png')     
            } else{
                //Idoso
                img.setAttribute('src','idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade < 10){
                //Criança
                img.setAttribute('src','criançam.png')
            } else if(idade < 25){
                //Jovem
                img.setAttribute('src','mjovem.png')
            } else if (idade < 60){
                //Adulta
                img.setAttribute('src','adulta.png')
            } else{
               //Idosa
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detctamos ${genero} com ${idade} anos `
        res.appendChild(img)
    }
}
