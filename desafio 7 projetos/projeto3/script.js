document.querySelector('.busca').addEventListener('submit',async (event)=>{
    event.preventDefault();

    //Essa função faz com que o formulário não seja enviado, caso ele tenha uma informação errada, pois assim ele iria atualizar a página e perderia às informações obtidas.

    let input = document.querySelector('#searchInput').value;
    if(input !==''){
       clearInfo();
       showWarring('Carregando');
       //Para ver as informações de onde pegar os resultados, vai em console, depois abre o network e vai na aba preview.
       
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=e4764ac21fc1a6ca49868c741043614e&units=metric&lang=pt_br`;

       let result = await fetch(url);
       let json = await result.json();
       console.log(json)

       //200 é quando se encontra a requisição.
       if(json.cod===200){
         showInfo({
            name:json.name,
            country:json.sys.country,
            temp:json.main.temp,
            tempMax:json.main.temp_max,
            tempMin:json.main.temp_min,
            tempIcon:json.weather[0].icon,
            windSpeed:json.wind.speed,
            windAngle:json.wind.deg
         });   
       } else{
           clearInfo();
           showWarring('Informações não encontradas.');
       }
    }
});

function showInfo(json){
    //Função para mostrar as informações no json.
    showWarring('');
    document.querySelector('.resultado').style.display='block';
    
    document.querySelector('.titulo').innerHTML=`${json.name} ${json.country}`;
    
    document.querySelector('.tempInfo').innerHTML=`${json.temp} <sup>Cº</sup>`;

    document.querySelector('.tempMax').innerHTML=`Max : ${json.tempMax} <sup>Cº</sup>`;

    document.querySelector('.tempMin').innerHTML=`Min : ${json.tempMin} <sup>Cº</sup>`;
    
    document.querySelector('.ventoInfo').innerHTML=`${json.windSpeed} <span>KM</span>`;

    document.querySelector('.temp img').setAttribute('src',`http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);

    document.querySelector('.ventoPonto').style.transform= `rotate(${json.windAngle-90}deg)`;
}

function clearInfo(){
    //Basicamente vai limpar o Warring e vai ocultar a tela
    showWarring('');
    document.querySelector('.resultado').style.display='none';
}

function showWarring(msg){
    document.querySelector('.aviso').innerHTML= msg;
    //Essa função irá mostrar ao usuário que, assim que ele digitar, o programa irá mostrar que ele irá carregar algo. 
}