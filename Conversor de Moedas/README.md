# Conversor de Moedas

Conversor de Real (BRL) para Dólar, Euro e Libra. Projeto pessoal de estudo.

## Estrutura

- `index.html` — marcação da página
- `estilo.css` — estilos visuais
- `atv5.js` — lógica de conversão

## Como usar

Abra o `index.html` no navegador, escolha a moeda, digite o valor em Reais e clique em **Converter**.

## Cotações utilizadas

| Moeda | Cotação (1 unidade = R$) |
|-------|--------------------------|
| Dólar | 5,20 |
| Euro  | 6,00 |
| Libra | 7,20 |

> Valores fixos no código, sem consulta a API externa.

## Histórico de mudanças

### Refatoração de design
- Fundo com gradiente azul-escuro e card branco centralizado com sombra
- Fonte **Inter** substituindo a antiga Noto Sans JP
- Radios transformados em cards selecionáveis (label inteiro clicável, com destaque azul ao marcar)
- Input numérico com label próprio, placeholder e foco com anel azul
- Botão com hover (eleva + sombra) e estados active/focus
- Área de resultado com fundo azul claro e animação de entrada
- Layout responsivo (ajusta padding/tamanho em telas < 480px)
- Uso de CSS variables (`--primary`, `--radius`, etc.) para facilitar manutenção

### Refatoração de HTML
- Estrutura semântica com `<main>`, `<header>` e `<form>`
- Labels associados corretamente aos inputs (acessibilidade)
- `<form>` com `onsubmit` permite converter pressionando Enter
- `aria-live="polite"` no resultado para leitores de tela

### Refatoração da lógica
- Cotações atualizadas: Dólar 5,20 / Euro 6,00 / Libra 7,20
- Validação de input vazio: exibe mensagem e devolve foco ao campo
- Validação extra para valores não numéricos ou negativos
- Uso do `value` dos radios em vez de comparar por índice
- Mapeamento de símbolos (U$, €, £) para evitar repetição
- Mensagens em texto puro, sem ícones
