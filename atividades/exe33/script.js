//Fazendo a requisição da API
async function getAPI(){
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json();
    if(response.status === 200){
      console.log(data); 
      showInfo(data);
    }

}

function showInfo(content){
    const myArea = content.map(({
      flags,
      name,
      capital,
      region,
      subregion,
      population
    }) =>{
      return `
      <div class= "content-countrie">
      <img src ="${flags.png}">
      <div class = "description">
      <h4> Country - ${name.common}</h4>
      <p> Capital - ${capital}</p>
      <p> Continent - ${region}</p>
      <p> Region - ${subregion}</p>
      <p> Population - ${population.toLocaleString()}</p>
      </div>
      </div>
      `
    })
    document.querySelector('#content-area').innerHTML = myArea;
}

//Pegando as regiões e os valores no select
async function getApiByRegion(region){
  const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
  const data = await response.json();
  if(response.status === 200){
      showInfo(data);
  }   
}

async function updateSelect(){
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json();
    if(response.status === 200){
      showInfo(data);
    }

  const select = document.querySelector('#countries');
  const optionValue = select.options[select.selectedIndex];
    
    const value = optionValue.value;
    console.log(value);
    getApiByRegion(value)
}

//--------------------------------------------

async function getApiByname(name){
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  const data = await response.json();
  if(response.status === 200){
     showInfo(data);
 }   
}

//Pegando o input para pesquisar pelo nome
document.querySelector('.search').addEventListener('submit', async (e)=>{
  e.preventDefault();
   const input = document.querySelector('#searchInput').value;
   getApiByname(input);
  
})


// Scroll Back To Top Button

const button = document.querySelector('#myButton');

//Quando rolar uns 20px para baixo, o botão ficará a mostra
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        button.style.display = 'block';
    }else{
        button.style.display = 'none';
    }
}

//Quando o usuário clicar, o documento vai rolar de volta ao topo

function topButton(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}




getAPI()

//-----------CHANGE THEME COLORS-----------------------
const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');

const getStyle = (element,style)=> {
    window.getComputedStyle(element)
    .getPropertyValue(style);
}

//Pegando o estilo

const initialColors = {
    bg:getStyle(html,'--bg'),
    text:getStyle(html,'--text')
}

const darkMode = {
    bg:'#2b3945',
    text:'#ffffff'
}

//Mudando a função padrão
const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) =>{
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key),colors[key]) 
    )
}

checkbox.addEventListener('change',({target})=>{
    target.checked ? changeColors(darkMode) : changeColors(initialColors);
})


//Salvando localmente às mudanças de tema.

const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value))

const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))

checkbox.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(darkMode) 
    createOrEditLocalStorage('modo','darkMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo','initialColors')
  }
})

if(!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValeuLocalStorage('modo') === "initialColors") {
  checkbox.removeAttribute('checked')
  changeColors(initialColors);
} else {
  checkbox.setAttribute('checked', "")
  changeColors(darkMode);
}