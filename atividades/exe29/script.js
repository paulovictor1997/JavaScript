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

   updateSelect()
}


function updateSelect(){
    let select = document.querySelector('#countries');
    let optionValue = select.options[select.selectedIndex];
    
    let value = optionValue.value;
    //let text = optionValue.text;
    console.log(value);
}

getApi()



