let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resultado = document.querySelector('div#resultado')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}
function isLista(n,l){
    if(l.indexOf(Number(n) != -1)){
        return true
    }else{
        return false
    }
}

function adicionar(){
   if(isNumero(num.value) && isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML= ''
    }else{
        alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione os números para poder finalizar')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] <  menor){
                menor = valores[pos]
            }
        }
        media = soma/total
        resultado.innerHTML = ''
        resultado.innerHTML+= `<p>Foram informados ${total} número(s)</p>`
        resultado.innerHTML += `<p>O maior número informado : ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informado foi : ${menor}</p>`
        resultado.innerHTML += `<p>A soma dos valores é : ${soma}</p>`
        resultado.innerHTML += `<p>A média dos números é : ${media}</p>`       
    }
}