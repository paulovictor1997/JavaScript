//let carro = {
//   nome:'fiat',
//   modelo:'uno',
//   peso:'800kg',
//   ligado:false,
//   ligar:function(){
//       this.ligado = true;
//       console.log('ligado')
//    },
//   acelerar:function(){
//        if(this.ligado == true){
//            console.log('acelerando');
//        } else{
//            console.log(this.nome +  " " + this.modelo + "está desligado");
//        }
//    } 
//}

//console.log('modelo : ' + carro.modelo);
//carro.ligar();
//carro.acelerar();


let bandas = [
    {nome:'Metallica', estilo : 'thrash metal'},
    {nome:'Cream', estilo : 'blues'},
    {nome:'Guns n Roses', estilo:'hard rock'}
]
console.log(bandas[0].nome , bandas[0].estilo );