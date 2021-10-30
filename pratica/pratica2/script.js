//Eventos de teclado
// onkeydown - Evento vai acontencer, quando se aperta a tecla.
// onkeyup - vento vai acontencer, quando se solta a tecla.

const digitou = (e) =>{
    if(e.keyCode === 13 && e.ctrlKey == true){ //ENTER
        let texto = document.getElementById('campo').value
        console.log(texto);
        console.log(e);
    }
}