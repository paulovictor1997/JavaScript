(function () {
    'use strict';

    // ==================== CONSTANTES / ESTADO ====================
    const quizContainer     = document.getElementById('quiz');
    const resultsContainer  = document.getElementById('resultado');
    const submitButton      = document.getElementById('finalizar');
    const restartButton     = document.getElementById('jogar-novamente');

    // ==================== BANCO DE PERGUNTAS ====================
    const myQuestions = [
        {
            question: '1º O Santos foi o responsável por atrair a atenção internacional para o torneio. Com uma das melhores equipes de todos os tempos, conhecida como Balé Branco. Quem o Santos venceu ?',
            answers: {
                a: 'Peñarol',
                b: 'Boca Juniors',
                c: 'Nacional (Uruguai)'
            },
            correctAnswer: 'a'
        },
        {
            question: '2º Em 1960 o Peñarol se tornou o primeiro campeão da Libertadores da América, quem o Peñarol venceu na final ?',
            answers: {
                a: 'Boca Juniors',
                b: 'Olímpia',
                c: 'Independiente'
            },
            correctAnswer: 'b'
        },
        {
            question: '3º A raposa como é conhecida o Cruzeiro, foi o segundo time brasileiro a vencer a Libertadores em 1976. Quem foi o adversário do Cruzeiro na final daquela edição ?',
            answers: {
                a: 'River Plate',
                b: 'Racing',
                c: 'Palmeiras'
            },
            correctAnswer: 'a'
        },
        {
            question: '4º Em 1998 o título do Vasco da Gama marcou a história do clube, afinal a conquista veio no centenário do clube, quem foi o adversário do Vasco na final ?',
            answers: {
                a: 'Barcelona (Equador)',
                b: 'Flamengo',
                c: 'Velez Sarsfield'
            },
            correctAnswer: 'a'
        },
        {
            question: '5º Durante esses 60 anos de Libertadores da América, existe dois clubes que dividem a liderança nas estatísticas como mais vice-campeonatos, quem são esses times ?',
            answers: {
                a: 'América de Cali / Olímpia',
                b: 'River Plate / São Paulo',
                c: 'Peñarol / Boca Juniors'
            },
            correctAnswer: 'c'
        }
    ];

    // ==================== FUNÇÕES ====================

    /**
     * Constrói o HTML das perguntas e injeta no container do quiz.
     */
    function buildQuiz() {
        const output = myQuestions.map((currentQuestion, questionNumber) => {
            const answers = Object.entries(currentQuestion.answers).map(
                ([letter, answer]) => `
                    <label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        <span class="answer-letter">${letter}</span> :
                        <span class="answer-text">${answer}</span>
                    </label>
                `
            ).join('');

            return `
                <fieldset class="question-block">
                    <legend class="question">${currentQuestion.question}</legend>
                    <div class="answers">${answers}</div>
                </fieldset>
            `;
        }).join('');

        quizContainer.innerHTML = output;
    }

    /**
     * Coleta as respostas, contabiliza os acertos, aplica feedback visual
     * e exibe o resultado com percentual.
     */
    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // Limpa classes anteriores para evitar re-runs sujos
            answerContainer.classList.remove('correct', 'incorrect');

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainer.classList.add('correct');
            } else {
                answerContainer.classList.add('incorrect');
            }
        });

        const total = myQuestions.length;
        const percentage = Math.round((numCorrect / total) * 100);

        resultsContainer.innerHTML = `
            <p>Você acertou <strong>${numCorrect}</strong> de <strong>${total}</strong> questões.</p>
            <p>Percentual de acertos: <strong>${percentage}%</strong></p>
        `;

        // Exibe o botão de jogar novamente e oculta o finalizar
        submitButton.hidden = true;
        restartButton.hidden = false;
    }

    /**
     * Reseta o quiz: reconstrói as perguntas, limpa resultado
     * e restaura os botões ao estado inicial.
     */
    function restartQuiz() {
        buildQuiz();
        resultsContainer.innerHTML = '';
        restartButton.hidden = true;
        submitButton.hidden = false;

        // Volta o scroll para o topo suavemente
        quizContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ==================== INICIALIZAÇÃO ====================
    buildQuiz();
    submitButton.addEventListener('click', showResults);
    restartButton.addEventListener('click', restartQuiz);
})();
