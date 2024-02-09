
const botoes = document.querySelectorAll(".botao")
const personagens = document.querySelectorAll(".personagem")

//eventos
botoes.forEach((botao,index)=>{
    botao.addEventListener(("click"), ()=>{
        selecionarPersonagem()
        selecionarBotao()

        botao.classList.add("selecionado")
        personagens[index].classList.add("selecionado")
    })
})


//funções

//função 1 - Seleção dos personagens
function selecionarPersonagem(){
    const personagemSelecionado = document.querySelector(".personagem.selecionado")
    personagemSelecionado.classList.remove("selecionado")
}

//função 2 - Tirando a seleção dos personagens
function selecionarBotao(){
    const botaoSelecionado = document.querySelector(".botao.selecionado")
    botaoSelecionado.classList.remove("selecionado")
}
