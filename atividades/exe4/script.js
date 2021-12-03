function confirmar(){
    let numero = document.querySelector('input#num')
    let resultado = document.querySelector('div#resultado')
    let temp = document.getElementsByName('temp') 
    
    let num = Number(numero.value)
    temperatura = ''
    if(temp[0].checked){
        temperatura = 'De Celsius para Fahrenheint'
        if(temperatura == 'De Celsius para Fahrenheint'){
           num = 1.8 * num + 32
           resultado.innerHTML = `${temperatura} a conversão é : ${num} Fº`
        }
        }
        if(temp[1].checked){
            temperatura = 'De Fahrenheint para Celsius'
            if(temperatura =='De Fahrenheint para Celsius'){
               num = (num - 32) * 5/9
               resultado.innerHTML = `${temperatura} a conversão é : ${num} Cº`
            }
        }
        if(temp[2].checked){
            temperatura = 'De Kelvin para Celsius'
            if(temperatura == 'De Kelvin para Celsius'){
                num = num - 273
                resultado.innerHTML = `${temperatura} a conversão é : ${num} Cº`
            }
        }
        if(temp[3].checked){
            temperatura = 'De Celsius para Kelvin'
            if(temperatura ==  'De Celsius para Kelvin' ){
                num = num + 273
                resultado.innerHTML = `${temperatura}a conversão fica : ${num} Kº` 
            }
        }
        if(temp[4].checked){
            temperatura = 'De Fahrenheint para Kelvin'
            if(temperatura == 'De Fahrenheint para Kelvin'){
                num = (num -32) * 5/9 + 273
                resultado.innerHTML = `${temperatura}a conversão fica : ${num} Kº`
                
            }
        }
        if(temp[5].checked){
            temperatura = 'De Kelvin para Fahrenheint'
            if(temperatura == 'De Kelvin para Fahrenheint'){
                num = (num - 273) * 9/5 + 32
                resultado.innerHTML = `${temperatura} a conversão fica :${num} Fº`
            }
        }
   
    numero.value = ''
    numero.focus()
}
