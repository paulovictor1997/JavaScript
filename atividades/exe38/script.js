const form = document.querySelector("#form");
const emailInput = document.querySelector('#email');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(emailInput.value === '' || !validateEmail(emailInput.value)){
        alert('por favor preencha seu email')
        return
    }
})


function validateEmail(email){
    const regex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(regex.test(email)){
        return true
    } 

    return false;
}
