/*
cronometro
let timer;

const comecar = () =>{
    timer = setInterval(showTime,1000);

}

const parar = () =>{
    limpar(timer);
}

const showTime = () =>{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    console.log(`${h}:${m}:${s}`);
}
*/ 

//Comecar e parar
//setTimeout - espera o tempo e roda a função.
//setInterval - ele vai rodar de certo tempo à função,ele vai parar quando a gente mandar.
/*
let timer;
const rodar = () =>{
    timer = setTimeout(() =>{
        //elemento html
    },2000);
}

const parar = () =>{
    clearTimeout(timer);
}
*/