document.getElementById("cadastroForm").addEventListener("submit", ((e)=>{
    e.preventDefault()

    const nome = document.getElementById("nome").value
    const data_nasc = document.getElementById("data_nasc").value
    const email = document.getElementById("email").value

    const pessoa = {
        nome,
        data_nasc,
        email
    }
    
    let pessoas = JSON.parse(localStorage.getItem("pessoas")) || []
    pessoas.push(pessoa)
    localStorage.setItem("pessoas", JSON.stringify(pessoas))

    window.location.href = "listagem.html"
}))