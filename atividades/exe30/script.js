const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme');

const getStyle = (element,style)=>{
    window.getComputedStyle(element)
    .getPropertyValue(style)
}

//Pegando o estilo

const initialColors = {
    bg:getStyle(html,'--bg'),
    bgcolor:getStyle(html,'--bg-dark'),

}    
    
const darkMode = {
  bg:'#1e202a',
  bgcolor:'#ffffff'
}
    
const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

//Mudar a função padrão

const changeColors = (colors) =>{
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key),colors[key])
    )
}

checkbox.addEventListener('change',({target})=>{
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

