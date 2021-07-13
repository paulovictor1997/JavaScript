let login = () => {
    let validateEmail = (event) =>{
        let input = event.currentTarget;
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailTest = regex.test(input.value);

        if(!emailTest){
            button.setAttribute('disabled','disabled');
            input.nextElementSibling.classList.add('error');
        } else{
            button.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error');
        }
    }
    
    let validatePassowrd = (event) => {
        let input = event.currentTarget;
        // Comando para que a senha seja aceita a partir de 5 caracteres ou mais. 
        if(input.value.length < 5) { 
            button.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');
        } else {
            button.removeAttribute("disabled");
            input.nextElementSibling.classList.remove('error');
        }
    }
    
    
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let button = document.querySelector('.button');

    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassowrd);

    let errorHandler = () =>{
        button.classList.remove('success');
        button.classList.add('error');
        button.textContent = 'ERROR...';
    }

    let successHandler = () =>{
        button.classList.remove('error');
        button.classList.add('success');
        button.textContent = 'SENT...';
    }

   if(button){
        button.addEventListener('click', (event) =>{
            event.preventDefault()

            button.textContent = 'LOADING...';

            fetch('https://reqres.in/api/login', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email:email.value,
                    password:password.value,
                })
            }).then((response) =>{
                if(response.status !==200){
                    return errorHandler();
                }
                successHandler();
            }).catch(()=>{
                errorHandler();
            })
        })
   }
}

window.onload = login ;
//Fetch - A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

//Then - É um método que usamos para passar uma função de callback que será chamada somente quando a promise do fetch for resolvida com sucesso.

//Regex - Regular Expression, são padrões para "filtrar" determinado texto em uma cadeia de caracteres, sejam eles valores de inputs ou qualquer outro texto.

// API REQUEST : "email": "eve.holt@reqres.in","password": "cityslicka" "token": "QpwL5tke4Pnpja7X4".
