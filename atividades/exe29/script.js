async function getApi(){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json();
    if(response.status === 200){
       console.log(data); 
        showInfo(data);
    }   
}

const showInfo = (content) =>{
    const myData = content.map(({
        flags,
        name,
        capital,
        region,
        subregion,
        population
    }) =>{
        return `
          <div class = "content">
          <img src ="${flags.png}">
          <div class = "description">
          <p> Country - ${name.common}</p>
          <p> Capital - ${capital}</p>
          <p> Region - ${region}</p>
          <p> Sub-Regioin - ${subregion}</p>
          <p> Population - ${population}</p>
          </div>
          </div>  
        `
    })
    document.querySelector('#content-area').innerHTML = myData;
}


function updateSelect(){
    let select = document.querySelector('#countries');
    let optionValue = select.options[select.selectedIndex];
    
    let value = optionValue.value;
    console.log(value);
    getApiByRegion(value);

}

async function getApiByRegion(region){
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = await response.json();
    if(response.status === 200){
       console.log(data); 
        showInfo(data);
    }   
}

getApi()



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