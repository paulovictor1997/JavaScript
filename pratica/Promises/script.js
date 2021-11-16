/*
Promise - Um resultado temporário que a gente recebe.
*/

const pegarTemperatura = () => {
    return new Promise(function(resolve,reject){
        console.log('pegando à temperatura');

        setTimeout(function(){
            resolve('40 na sombra');
        },2000);
    })
}

//USANDO A PROMISE
const temp = pegarTemperatura();
temp.then(function(resultado){
    console.log(`TEMPERATURA : ${resultado}`);
});
temp.catch(function(error){
    console.log(error);
})