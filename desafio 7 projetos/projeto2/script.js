let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
    let now = new Date();
    let hora  = now.getHours();
    let minuto = now.getMinutes();
    let segundo = now.getSeconds();

    if(hora  >=0 && hora < 12){
        document.body.style.background = '#f1d9bf';
    }else if (hora >=12 && hora < 18){
        document.body.style.background = '#d78853';
    } else{
        document.body.style.background = '#0d3f48';
    }
    digitalElement.innerHTML = `${fixZero(hora)}:${fixZero(minuto)}:${fixZero(segundo)}`

    // O calculo que foi feito a seguir, foi feito para que os ponteiros ficassem na posição de relógio, pois no CSS que está configurado originalmente a posição 'zero' faz com que os ponteiros fiquem na horizontal.

    // 360/60 = quantos graus tem cada segundo, o resultado multiplica pelos segundos e diminui por 90 que é o valor do grau. Para que o ponteiro de segundos fique na ponta. (360 é a quantidade do ângulo).

    let sDeg = ((360 / 60) * segundo) - 90;
    let mDeg = ((360 / 60) * minuto) - 90;
    let hDeg = ((360 / 12) * hora) - 90;
    //O calculo da hora é dividido por 12, pois em um relógio analógico ele só marca de doze em doze horas
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
   
    
}

function fixZero(time){
    if(time < 10){
        return '0'+time;
    } else{
        return time;
    }
    //Função feita para adicionar o zero antes do número.Para ficar melhor formatada. 
}

setInterval(updateClock,1000);
//Função aonde o relógio vai atualizar a cada milissegundo.
updateClock();
//Chamando a própria função, ele irá aparecer imediatamente, sem precisar um segundo de delay para funcionar.