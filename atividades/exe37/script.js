const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const jobSelect = document.querySelector('#job')
const messageTextArea = document.querySelector('#message')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    //verificando nome se está vazio
    if(nameInput.value === ''){
        alert('Por favor, preencha o seu nome')
        return
    }

    //verificando email se está vazio
    if(emailInput.value === '' || !validateEmail(emailInput.value)){
        alert('Por favor, preencha o seu email')
        return
    }

    //verificando senha
    if(!validatePassword(passwordInput.value,5)){
        alert('A senha precisa do mínimo 5 caracteres.')
        return
    }

    //verificando se o select foi preenchido
    if(jobSelect.value === ''){
        alert('Por favor, selecione a sua situação')
        return true
    } 

    //se a mensagem estiver preenchida
    if(messageTextArea.value === ''){
        alert('Por favor, preencha a área do texto')
        return true
    }

    //caso todos os campos estejam preenchidos
    form.submit();
})

//validando email
function validateEmail(email){
    const regex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(regex.test(email)){
       return true 
    }

    return false

}

//validando senha
function validatePassword(password,minDigits){
    if(password.length >= minDigits){
        //senha validada
        return true
    }

    return false
}