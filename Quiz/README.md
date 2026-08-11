# ⚽ Quiz Libertadores

Quiz interativo sobre a história da Copa Libertadores da América, construído com HTML semântico, SCSS e JavaScript vanilla.

## 🖥️ Tecnologias

- HTML5 (semântica + acessibilidade)
- CSS3 via SCSS (Sass)
- JavaScript ES6+ (IIFE, `Object.entries`, `classList`)

## 🎨 Visual

O design segue o conceito **"Stadium Premium"** — uma fusão de três estilos:

- **Stadium:** tema esportivo (gradiente verde gramado, dourado da taça, céu noturno de fundo)
- **Soft Modern:** cards com sombras limpas, cantos arredondados, radio buttons customizados
- **Cyber (sutil):** gradiente no título e glow discreto no resultado

Responsivo com breakpoints em 768px e 480px.

## ⚙️ Funcionalidades

- 5 perguntas de múltipla escolha sobre a Libertadores
- Feedback visual verde/vermelho nas respostas
- Percentual de acertos ao finalizar
- Botão "Jogar Novamente" que reseta sem recarregar a página
- Scroll suave ao reiniciar

## 📂 Estrutura

```
Quiz/
├── index.html       → Estrutura semântica (main, header, section, fieldset)
├── script.js        → Lógica do quiz (buildQuiz, showResults, restartQuiz)
├── style.scss       → Código-fonte dos estilos (variáveis, reset, responsivo)
├── style.css        → CSS compilado
├── style.css.map    → Source map para debug
└── imagens/
    └── *.ico        → Favicon
```

## 🛠️ Compilar SCSS

```bash
npx sass style.scss style.css
```

## 📝 Refatorações aplicadas

- **HTML:** tags semânticas (`main`, `header`, `section`, `fieldset/legend`), `aria-live` para resultado, meta tags
- **JS:** variáveis com `const` no topo, `Object.entries()` no lugar de `for...in`, classes CSS ao invés de `style` inline, JSDoc nas funções
- **SCSS:** variáveis com nomes semânticos, reset moderno, media queries, transições, `:focus-visible`

---

Projeto de estudo — primeiros passos com JavaScript, evoluído com boas práticas e redesign visual.
