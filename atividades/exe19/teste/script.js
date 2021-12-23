const url = 'https://jsonplaceholder.typicode.com/users';
const usuario = document.getElementById('user');

function getUser(){
    //GET - Pegando informações da API.
    axios.get(url)
    .then(response => {
        console.log(response);
        const data = response.data
        show(data)
    })
    .catch(error => console.log(error))
}

getUser();

function show(users){
    let output = '';
    for (let data of users){
          output += `<li> id - ${data.id} - ${data.name} - email : ${data.email}</li>`;
    }
    usuario.innerHTML = output
}    