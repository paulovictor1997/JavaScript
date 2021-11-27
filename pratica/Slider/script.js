/*
 caso queira colocar o slide em um tamanho específico e alterando os botões.

 let sliderWidth = document.querySelector('.slider').clientWidth;
document.querySelector('.slider--width').style.width = `${sliderWidth * totalSlides}px`;
document.querySelector('.slider--controls').style.width = ${sliderWidth}px;
*/


let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlides = 0;

document.querySelector('.slider--width').style.width = `calc(100vw*${totalSlides})`;
document.querySelector('.slider--controls').style.height = 
`${document.querySelector('.slider').clientHeight}px`;


const goPrev = ()=>{
    currentSlides--;
    if(currentSlides < 0){
        currentSlides = totalSlides-1;
    }
    updateMargin();
}

const goNext = ()=>{
    currentSlides++;
    if(currentSlides > (totalSlides-1)){
        currentSlides = 0; 
    }
    updateMargin();
}

const updateMargin = ()=>{
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlides*sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

/*
 caso queira colocar automáticamente
 setInterval(goNext,2000);
*/

