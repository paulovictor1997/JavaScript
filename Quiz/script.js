(function(){
    function buildQuiz(){
      // variável para armazenar a saída do HTML
      let output = [];
  
      // E para cada questão
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variável para armazenar a lista de respostas possíveis
          let answers = [];
  
         // E para cada resposta disponível 
          for(letter in currentQuestion.answers){
  
            // Adiciona no HTML o  radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // adicione esta pergunta e suas respostas ao resultado.
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finalmente combine nossa lista de saída em uma string de HTML e coloca na página
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // reuni no contêinere a resposta do nosso questionário
      let answerContainers = quizContainer.querySelectorAll('.answers');
  
      // acompanhar as respostas do usuário
      let numCorrect = 0;
  
      // Para cada questão
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // encontrar a resposta selecionada
        let answerContainer = answerContainers[questionNumber];
        let selector = `input[name=question${questionNumber}]:checked`;
        let userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
          // Se às respostas estiverem corretas,
          //ele vai contar e mostrar quantas acertou
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
          // Se tiver alguma resposta certa, ficará verde
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          // Se tiver alguma resposta errada,
          // Às questões marcadas errada, ficarão de vermelho
          answerContainers[questionNumber].style.color = 'red';
        }
        
      });
  
      // mostra o número de respostas corretas do total
      resultsContainer.innerHTML = `Você acertou ${numCorrect} de ${myQuestions.length} questões`;
    }
  
    let quizContainer = document.getElementById('quiz');
    let resultsContainer = document.getElementById('resultado');
    let submitButton = document.getElementById('finalizar');
    let myQuestions = [
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
          b: "Olímpia",
          c: "Independiente"
        },
        correctAnswer: 'b'
      },
      {
        question: '3º A raposa como é conhecida o Cruzeiro, foi o segundo time brasileiro a vencer a Libertadores em 1976. Quem foi o adversário do Cruzeiro na final daquela edição ?',
        answers: {
          a: 'River Plate',
          b: 'Racing',
          c: 'Palmeiras',
        },
        correctAnswer: 'a'
      },
      {
        question :'4º Em 1998 o título do Vasco da Gama marcou a história do clube, afinal a conquista veio no centenário do clube,quem foi o adversário do Vasco na final ?',
        answers:{
          a: 'Barcelona (Equador)',
          b: 'Flamengo',  
          c: 'Velez Sarsfield'
        },
        correctAnswer : 'a'
      },
      {
        question:'5º Durante esses 60 anos de Libertadores da América, existe dois clubes que dividem a liderança nas estatísticas como mais vice-campeonatos, quem são esses times ?',
        answers:{
          a: 'América de Cali / Olímpia',
          b: 'River Plate / São Paulo',
          c: 'Penãrol / Boca Juniors',
        },
        correctAnswer : 'c'
      }
    ];
  
    
    buildQuiz();
  
    
    submitButton.addEventListener('click',showResults);
  })();