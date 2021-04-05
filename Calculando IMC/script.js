function calcular(){
    let p = document.querySelector('input#pes')
    let a = document.querySelector('input#alt')
    let resultado = document.querySelector('div#resultado')

    if(a.value.length == 0 || p.value.length == 0){
        alert('Verifique os dados novamente')
    }else{
        let altura = Number.parseFloat(a.value)
        let peso = Number.parseFloat(p.value)
        let total = peso/altura**2
        
        if (total < 18.5){
            resultado.innerHTML = `Seu IMC é de ${total.toFixed(2)}. Logo, você está abaixo do peso.`
        } 
        
        if(total > 18.5 || total <=24.9){
            resultado.innerHTML = `Seu IMC é de ${total.toFixed(2)}. Logo, seu peso está ideal.`
        } 
        
        if(total > 25 || total <=29.9){
            resultado.innerHTML = `Seu IMC ${total.toFixed(2)}. Logo, você está com sobrepeso. `
        } 
        
        if(total > 30 || total <=39.9){
            resultado.innerHTML = `Seu IMC ${total.toFixed(2)}. Você está obeso, precisa emagrecer.`
        } 
        
        if(total > 40){
            resultado.innerHTML = `Seu IMC ${total.toFixed(2)}. Obesidade morbida, você precisa urgente emagrecer.`
        }
        p.value = ''
        a.value = ''
        p.focus()
        a.focus()

    }    

}