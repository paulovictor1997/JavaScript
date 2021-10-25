// DADOS INICIAIS 
let square = {
    a1:'', a2:'', a3:'',
    b1:'', b2:'', b3:'',
    c1:'', c2:'', c3:''
};

let player = '';
let warning = '';
let playing = false;

reset();

// EVENTOS 
document.querySelector('.reset').addEventListener('click',reset);
document.querySelectorAll('.item').forEach(item=>{
    item.addEventListener('click',itemClick);
});

//FUNÇÕES
function itemClick(event){
    //FUNÇÃO ONDE IRÁ PEGAR TODOS QUE TEM A CLASSE ITEM, PARA QUE PERCORRA CADA UM DELES, PARA ADICIONAR O EVENTO DE CLIQUE. SE CONSEGUE IDENTIFICAR PELO DATA-ITEM.
    let item = event.target.getAttribute('data-item');
    if(playing && square[item] ===''){
       square[item] = player;
       renderSquare();
       togglePlayer(); 
    }
}

function reset(){
 // VAI LIMPAR OS AVISOS,ESCOLHER O PLAYER ALEATORIAMENTE E DEFINIR O PLAYER. 
   warning = '';
   let random = Math.floor(Math.random() * 2);
     //O COMANDO A SEGUIR,É O MESMO QUE ESSE.
    // if (random === 0){
    // player = 'x';    
    //} else {
    // player = '0';   
    //}
    player = (random ===0) ? 'x':'o';
   
   for(let i in square){
       square[i] = '';   
   }
   playing = true;

   renderSquare();
   renderInfo();
 
}
//DEIXA OS DADOS DO SQUARE À MOSTRA
function renderSquare(){
    for(let i in square){
        let item = document.querySelector(`div[data-item = ${i}]`);
        item.innerHTML = square[i];
    }
    checkGame();
}

//MOSTRA AS INFORAÇÕES ABAIXO
function renderInfo(){
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}

//FUNÇÃO QUE TROCA O JOGADOR
function togglePlayer(){
    player = (player === 'x') ? 'o' : 'x';
    renderInfo();
}

function checkGame(){
    if(checkWinnerfor('x')){
       warning = 'Player "X" venceu';
       playing = false; 
    } else if(checkWinnerfor('o')){
       warning = 'Player "O" venceu';
       playing = false;   
    } else if (isFull()){
       warning = 'Empate';
       playing = false;  
    }
}

function checkWinnerfor(player){
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',
        
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b2,b3',

        'a1,b2,c3',
        'a3,b2,c1'
    ];

    for(let p in pos){
        let pArray = pos[p].split(',')//a1,a2,a3
        let hasWon = pArray.every(option=>square[option] === player);
        if(hasWon){
           return true; 
        }
    }

    return false;

}

function isFull(){
    for(let i in square){
        if(square[i] ===''){
            return false;
        }
    }
    return true;
}