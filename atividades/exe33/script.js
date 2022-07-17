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
      population
    }) =>{
      return `
      <div class= "content">
      <img src ="${flags.png}">
      <div class = "description">
      <p> Country - ${name.common}</p>
      <p> Capital - ${capital}</p>
      <p> Region - ${region}</p>
      <p> Population - ${population}</p>
      </div>
      </div>
      `
    })
    document.querySelector('#content-area').innerHTML = myArea;
}

//Pegando as regiões
async function getApiByRegion(region){
  const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
  const data = await response.json();
  if(response.status === 200){
     console.log(data); 
      showInfo(data);
  }   
}

//Pegando o input para pesquisar pelo nome
document.querySelector('.search').addEventListener('submit', async (e)=>{
  e.preventDefault();
   let input = document.querySelector('#searchInput').value;
   getApiByname(input);
  
})

async function getApiByname(name){
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  const data = await response.json();
  if(response.status === 200){
    console.log(data); 
     showInfo(data);
 }   
}
//--------------------------------------------
// Pegando o select 
function updateSelect(){
  let select = document.querySelector('#countries');
    let optionValue = select.options[select.selectedIndex];
    
    let value = optionValue.value;
    console.log(value);
    getApiByRegion(value)
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