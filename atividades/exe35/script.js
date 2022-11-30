// Pegando o elemento de filter e o elemento cards
const filterElement = document.querySelector('header input');
const cards = document.querySelectorAll('.cards li');

// Adicionando um evento de input para o elemento filter
filterElement.addEventListener('input', filterCard);

// Função filterCard
function filterCard(){
// Se a função filter não estiver vazia.
   if(filterElement.value != ''){
      for(let card of cards){
          let title = card.querySelector('h2');
          title = title.textContent.toLowerCase();
          let filterText = filterElement.value.toLowerCase();
          if(!title.includes(filterText)){
             card.style.display = 'none'; 
          } else{
            card.style.display = 'block';
          } 
      }  
   } else{
     // Se estiver vazia. 
     for(let card of cards) {
        card.style.display = 'block';
     }   
   } 

}


