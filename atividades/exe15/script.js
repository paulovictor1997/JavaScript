//ACESSANDO A API
//ACCESS THE API 
function pokeApi(param,num){
    fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
    .then(function (response){
        response.json()
        .then(function(pokemon){
            createPokemon(pokemon,num);
            console.log(pokemon)
        })
    })
    }
    
    //Função criada para pegarmos os personagens,pois quando se passa o parâmetro e chamanos a função, só temos acesso a um personagem 
    //Function created to get the characters, because when we pass the parameter and call the function, we only have access to one character
    function consultarPokemon(){
        const personagem1 = Math.round(Math.random()*150);
        const personagem2 = Math.round(Math.random()*150);
    
        pokeApi(personagem1, 1);
        pokeApi(personagem2, 2);
    }
    
    
    function createPokemon(pokemon,num){
        //CRIANDO OS DADOS
        //CREATE THE ITENS
        const item = document.querySelector(`#pokemon${num}`);
        
        const img = item.getElementsByTagName('img')[0];
        img.setAttribute('src', pokemon.sprites.front_default);
        
        const name = item.getElementsByTagName('p')[0];
        name.textContent = `Name : ${pokemon.name}`;
        
        const baseExperience = item.getElementsByTagName('p')[1];
        baseExperience.textContent = `Experience : ${pokemon.base_experience}`;
    
        const weight = item.getElementsByTagName('p')[2];
        weight.textContent = `Weight : ${pokemon.weight}`;
    }
    
    consultarPokemon();

//PARTE DO MENU RESPONSIVO
//PART OF RESPONSIVE MENU
const menu = document.querySelector('.menu');
const menuLateral = document.querySelector('.active')

document.querySelector('.hamburguer').addEventListener('click', () =>{
    menu.classList.toggle('menu');
    menuLateral.classList.toggle('active');
})
