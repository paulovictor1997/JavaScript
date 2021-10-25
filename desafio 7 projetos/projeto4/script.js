//VARIAVÉIS INICIAIS 
//currentQuestion = Pegando a questão atual
let currentQuestion = 0;
let correctAnswer = 0;

showQuestion();

//EVENTO PARA RESETAR O QUIZ
document.querySelector('.scoreArea button').addEventListener('click',resetEvent)

//FUNÇÕES
function showQuestion(){
  if(questions[currentQuestion]){
    let q = questions[currentQuestion];

    let porcentagem = Math.floor((currentQuestion / questions.length) * 100);
    document.querySelector('.progress--bar').style.width = `${porcentagem}%`;

    document.querySelector('.scoreArea').style.display='none';
    document.querySelector('.questionArea').style.display='block';

    document.querySelector('.question').innerHTML=q.question;

    //FORMA SIMPLIFICADA DE MANIPULAR O DOM 
    let optionsHtml ='';
    for(let i in q.options){
      //TEM QUE CONVERTER,POIS O DATA-OP, É UMA STRING.
      optionsHtml+=`<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`; 
    }
    document.querySelector('.options').innerHTML = optionsHtml;

    document.querySelectorAll('.options .option').forEach(item =>{
      item.addEventListener('click', optionClickEvent);
    });
  } else{
    finishQuiz();
    //FINALIZANDO A QUESTÃO
  }
}

//FUNÇÃO PARA O EVENTO DE CLIQUE 
function optionClickEvent(e){
    let clickedOption = parseInt(e.target.getAttribute('data-op'));
    
    if(questions[currentQuestion].answer === clickedOption){
      correctAnswer++;
    }
    
    currentQuestion++;
    showQuestion();
}

//FUNÇÃO QUE IRÁ MOSTRAR O RESULTADO 
function finishQuiz(){
  let points = Math.floor((correctAnswer / questions.length) * 100);
   if(points < 30){
     document.querySelector('.scoreText1').innerHTML = 'RUIM';
     document.querySelector('.scorePct').style.color = 'red';
   } else if (points >=30 && points <70){
    document.querySelector('.scoreText1').innerHTML = 'BOM';
    document.querySelector('.scorePct').style.color = 'yellow';
   } else if(points >=70){
    document.querySelector('.scoreText1').innerHTML = 'EXCELENTE';
    document.querySelector('.scorePct').style.color = 'green';
   }
  
  document.querySelector('.scorePct').innerHTML=`Acertou ${points}%`;
  document.querySelector('.scoreText2').innerHTML=`Você respondeu ${questions.length} e acertou ${correctAnswer}.`;
  
  document.querySelector('.scoreArea').style.display='block';
  document.querySelector('.questionArea').style.display='none';
  document.querySelector('.progress--bar').style.width = '100%';
}

function resetEvent(){
  correctAnswer = 0;
  currentQuestion = 0;
  showQuestion();
}