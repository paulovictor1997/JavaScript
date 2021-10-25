let areas = {
    a: null,
    b: null,
    c: null
}
  
  
  document.querySelectorAll('.item').forEach(item =>{
       item.addEventListener('dragstart',dragstart);
       item.addEventListener('dragend',dragend);
       //Evento que irá ocorrer quando ele for arrastado.
  });
  
  
  //Para criar área em que se pode soltar coisas nele, tem que se criar três eventos
  document.querySelectorAll('.area').forEach(area =>{
      area.addEventListener('dragover',dragOver);
      area.addEventListener('dragleave',dragLeave);
      area.addEventListener('drop',drop);	
  });
  
  document.querySelector('.neutralArea').addEventListener('dragOver',dragOverNeutral);
  document.querySelector('.neutralArea').addEventListener('dragLeave',dragLeaveNeutral);
  document.querySelector('.neutralArea').addEventListener('drop',dropNeutral);
  
  //----functions item----//
  
  function dragstart(e){
     e.currentTarget.classList.add('dragging');		
  
}
  
  function dragend(e){
     e.currentTarget.classList.remove('dragging');
}
  
  
  //----functions area----//
  
  //Essa primeira função será o evento para quando começarmos a passar pelas áreas. 
  function dragOver(e){
    if(e.currentTarget.querySelector('.item') === null){
    e.preventDefault();
    e.currentTarget.classList.add('hover');
    }
}
  
  //Esse segundo evento é para quando ele sai de uma área.
  function dragLeave(e){
    e.currentTarget.classList.remove('hover');
}
  
  //Essa função é para quando soltarmos na áera em que estiver liberado,
  //para que essa função funcione, a função dragOver, tem que estar rodando.
  function drop(e){
    e.currentTarget.classList.remove('hover');  
    if(e.currentTarget.querySelector('.item') === null){
     let dragItem = document.querySelector('.item.dragging'); 
     e.currentTarget.appendChild(dragItem);
     updateAreas();	
    }
        
}
  
  //----Funções para área neutra----
function dragOverNeutral(e){
    e.preventDefault();
    e.currentTarget.classList.add('hover');
  }
  
 function dragLeaveNeutral(e){
    e.currentTarget.classList.remove('hover');
  }
  
 function dropNeutral(e){
     e.currentTarget.classList.remove('hover');
     let dragItem = document.querySelector('.item.dragging'); 
     e.currentTarget.appendChild(dragItem);
     updateAreas();
}

//Funções Lógicas
//Sempre que for feita uma troca ele fará um update
function updateAreas(){
    document.querySelectorAll('.area').forEach(area=>{
        let name = area.getAttribute('data-name');
        if(area.querySelector('.item')!==null){
           areas[name] = area.querySelector('.item').innerHTML;  
        } else {
            areas[name] = null
        }
    });

    if(areas.a==='1' && areas.b ==='2' && areas.c ==='3'){
        document.querySelector('.areas').classList.add('correct');
    } else {
        document.querySelector('.areas').classList.remove('correct');
    }
}