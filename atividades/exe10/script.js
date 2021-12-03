let ready = (retornar) =>{
    if(document.readyState !='loading')retornar();
    else document.addEventListener('DOMContentLoaded', retornar);
}

 //CAMPO VAZIO
ready(() =>{
    document.querySelector('.button').addEventListener('click',(e) =>{
       
        if(document.getElementById('name').value==''){
         document.getElementById('name').classList.add('red');
         document.querySelector('.erro1').style.display= 'block';
         document.querySelector('.erroIcon1').style.display='block';
    }

       if(document.getElementById('lastName').value==''){
         document.getElementById('lastName').classList.add('red');
         document.querySelector('.erro2').style.display= 'block';
         document.querySelector('.erroIcon2').style.display='block';
    }

       if(document.getElementById('email').value==''){
         document.getElementById('email').classList.add('red');
         document.querySelector('.erro3').textContent='O campo email não pode ficar vazio';
         document.querySelector('.erro3').style.display='block';
         document.querySelector('.erroIcon3').style.display='block';   
     }

       if(document.getElementById('password').value==''){
         document.getElementById('password').classList.add('red');
         document.querySelector('.erro4').style.display='block';
         document.querySelector('.erroIcon4').style.display='block';  
    }

       //VALORES
         if(document.getElementById('name').value !=''){
         document.getElementById('name').classList.remove('red');
         document.querySelector('.erro1').style.display='none';
         document.querySelector('.erroIcon1').style.display='none'
       }
     
        if(document.getElementById('lastName').value!=''){
         document.getElementById('lastName').classList.remove('red');
         document.querySelector('.erro2').style.display='none';
         document.querySelector('.erroIcon2').style.display='none';
       }

       if(document.getElementById('email').value !=''){
         if (document.getElementById("email").value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi)
          ){
             document.getElementById('email').classList.remove('red');
             document.querySelector('.erro3').style.display='none';
             document.querySelector('.erroIcon3').style.display='none';
          } else{
             document.getElementById('email')
             document.getElementById('email').classList.add('red');
             document.querySelector('erroIcon3').style.display='none';
             document.querySelector('.erro3').textContent ='looks like this is not an email';
          }
       }
      if(document.getElementById("name").value != "" &&  document.getElementById("last").value != "" && document.getElementById("email").value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi) && document.getElementById("password").value != ""){
         document.getElementById('name').value='';
         document.getElementById('lastName').value='';
         document.getElementById('email').value='';
         document.getElementById('password').value='';
         location.reload();
      }

    })

    window.addEventListener('keydown',function(event){
       if(event.key === 'Enter'){
         event.preventDefault();
         document.querySelector('.button').click();
       }
    },
    true
    )
})