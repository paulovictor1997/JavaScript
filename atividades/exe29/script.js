async function getApi(){
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    if(response.status === 200){
        console.log(data);
    }
}

getApi()



