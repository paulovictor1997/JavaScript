function finalizar(){
    let numero = document.querySelector('input#numero')
    let resultado = document.querySelector('div#resultado')
    let dinheiro = document.getElementsByName('din')

    let num = Number.parseFloat(numero.value)
    valor = ''
    if(dinheiro[0].checked){
        valor = 'Dólar'
        if(valor == 'Dólar'){
            num = num / 5.75 
            resultado.innerHTML = `A conversão de ${numero.value}R$ para ${valor} fica : ${num.toFixed(2)}U$`
        }
    }
    if(dinheiro[1].checked){
        valor = 'Euro'
        if(valor == 'Euro'){
            num = num / 6.78
            resultado.innerHTML = `A conversão de ${numero.value}R$ para ${valor} fica : ${num.toFixed(2)} Euros`
        }
    }
    if(dinheiro[2].checked){
        valor = 'Libra'
        if(valor == 'Libra'){
            num = num / 7.93
            resultado.innerHTML = `A conversão de ${numero.value}R$ para ${valor} fica : ${num.toFixed(2)} Libras`
        }
    }
    numero.value = ''
    numero.focus()
}