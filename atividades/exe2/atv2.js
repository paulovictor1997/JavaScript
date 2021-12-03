let nome = document.querySelector('input#texto')
let lista = document.querySelector('select#flista')
let resultado = document.querySelector('div#resultado')
let valores = []

function isLista(n,l){
    if(l.indexOf(n != -1 )){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isLista(nome.value,valores)){
        valores.push(nome.value)
        let item = document.createElement('option')
        item.innerHTML = `${nome.value} foi adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } 
    nome.value = ''
    nome.focus()
}
function randOrd() {
    return (Math.round(Math.random())-0.5);
}
function finalizar(){
    if(valores.length == 0){
        alert('Adicione os nomes para finalizar')
    }else{
       let total = valores.length
       
       resultado.innerHTML = ''
       resultado.innerHTML +=`<p>Foram adicionados ${total} nomes.</p>`
       resultado.innerHTML +=`<p>A ordem de apresentação será : <br>${valores.sort(randOrd)}</p>`
    }
   
}