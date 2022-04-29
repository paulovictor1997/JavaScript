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
          <div>
          <img src ="${flags.png}">
          <p> ${name.common}</p>
          <p> ${capital}</p>
          <p> ${continents}</p>
          <p> ${population}</p>
          </div>  
        `
    })
    document.querySelector('.teste').innerHTML = myData;

}

getApi()



