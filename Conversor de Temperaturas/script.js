function confirmar(event) {
    if (event) event.preventDefault();

    const numero = document.querySelector('input#num');
    const resultado = document.querySelector('div#resultado');
    const radios = document.getElementsByName('temp');

    const num = Number(numero.value);
    const numFormatado = num.toFixed(2);
    let temperatura = '';

    if (radios[0].checked) {
        temperatura = 'De Celsius para Fahrenheint';
        const convertido = (1.8 * num + 32).toFixed(2);
        resultado.innerHTML = `${temperatura} a conversão de ${numFormatado}Cº é : ${convertido} Fº`;
    } else if (radios[1].checked) {
        temperatura = 'De Fahrenheint para Celsius';
        const convertido = ((num - 32) * 5 / 9).toFixed(2);
        resultado.innerHTML = `${temperatura} a conversão de ${numFormatado}Fº é : ${convertido} Cº`;
    } else if (radios[2].checked) {
        temperatura = 'De Kelvin para Celsius';
        const convertido = (num - 273).toFixed(2);
        resultado.innerHTML = `${temperatura} a conversão de ${numFormatado}Kº é : ${convertido} Cº`;
    } else if (radios[3].checked) {
        temperatura = 'De Celsius para Kelvin';
        const convertido = (num + 273).toFixed(2);
        resultado.innerHTML = `${temperatura} a conversão de ${numFormatado}Cº fica : ${convertido} Kº`;
    } else if (radios[4].checked) {
        temperatura = 'De Fahrenheint para Kelvin';
        const convertido = ((num - 32) * 5 / 9 + 273).toFixed(2);
        resultado.innerHTML = `${temperatura} a conversão de ${numFormatado}Fº fica : ${convertido} Kº`;
    } else if (radios[5].checked) {
        temperatura = 'De Kelvin para Fahrenheint';
        const convertido = ((num - 273) * 9 / 5 + 32).toFixed(2);
        resultado.innerHTML = `${temperatura} a conversão de ${numFormatado}Kº fica : ${convertido} Fº`;
    }

    numero.value = '';
    numero.focus();
}