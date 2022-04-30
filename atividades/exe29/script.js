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
        continents,
        population
    }) =>{
        return `
          <div class = "content">
          <img src ="${flags.png}">
          <div class = "description">
          <p> Country - ${name.common}</p>
          <p> Capital - ${capital}</p>
          <p> Continent - ${continents}</p>
          <p> Population - ${population}</p>
          </div>
          </div>  
        `
    })
    document.querySelector('#content-area').innerHTML = myData;

}


getApi()



