const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');

const getStyle = (element,style)=>{
    window.getComputedStyle(element)
    .getPropertyValue(style)
}


//Pegando o estilo do CSS
const initialColors = {
    bg: getStyle(html,'--bg'),
    bgPanel: getStyle(html,'--bg-panel'),
    colorHeadings: getStyle(html,'--color-headings'),
    colorText: getStyle(html,'--color-text')
}

const darkMode = {
    bg: '#333333',
    bgPanel:'#434343', 
    colorHeadings: '#3664FF',
    colorText:'B5B585'
}

//Função para transformar mudar de maiúsculo para o "-$1". (em minúsculo)
const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


//Mudar a função padrão
const changeColors = (colors) => {
    //Com a função, ele irá procurar a chave key
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

//Mudar a função padrão
checkbox.addEventListener('change',({target})=>{
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
});


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