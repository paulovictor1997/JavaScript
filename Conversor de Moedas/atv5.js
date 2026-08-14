function finalizar() {
    const numero = document.querySelector('input#numero')
    const resultado = document.querySelector('div#resultado')
    const dinheiro = document.getElementsByName('din')

    const valor = numero.value.trim()

    if (valor === '') {
        resultado.innerHTML = 'Por favor, insira um valor para ser convertido.'
        numero.focus()
        return
    }

    const num = Number.parseFloat(valor)

    if (Number.isNaN(num) || num < 0) {
        resultado.innerHTML = 'Por favor, insira um valor numérico válido.'
        numero.focus()
        return
    }

    const cotacoes = {
        Dólar: 5.20,
        Euro: 6.00,
        Libra: 7.20
    }

    let moedaEscolhida = ''
    for (const radio of dinheiro) {
        if (radio.checked) {
            moedaEscolhida = radio.value
            break
        }
    }

    if (!moedaEscolhida) {
        resultado.innerHTML = 'Por favor, selecione uma moeda.'
        return
    }

    const taxa = cotacoes[moedaEscolhida]
    const convertido = num / taxa

    const simbolo = {
        Dólar: 'U$',
        Euro: '€',
        Libra: '£'
    }[moedaEscolhida]

    resultado.innerHTML = `A conversão de R$${num.toFixed(2)} para ${moedaEscolhida} fica: ${simbolo} ${convertido.toFixed(2)}`

    numero.value = ''
    numero.focus()
}
