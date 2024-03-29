let form = document.querySelector('.form');
let email = document.getElementById('email');

form.addEventListener('submit',e =>{
    e.preventDefault();
    let emailValue = email.value;

    if(!validateEmail(emailValue)){
        //form.classList.add('error');
        document.querySelector('.erroText').style.display = 'block';
    }else{
        //form.classList.remove('error');
        document.querySelector('.erroText').style.display = 'none';
    }
});

function validateEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}