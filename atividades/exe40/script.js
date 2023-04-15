//validate email -1
const email1 = document.querySelector('#email-1')
const emailInput1 = document.querySelector('#input-1')

email1.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(emailInput1.value === '' || !validateEmail(emailInput1.value)){
        document.querySelector(".error1").style.display='block';
    } else{
        document.querySelector(".error1").style.display='none';
    }
   
})
 
//validate email - 2
const email2 = document.querySelector('#email-2')
const emailInput2 = document.querySelector('#input-2')

email2.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(emailInput2.value === '' || !validateEmail(emailInput2.value)){
        document.querySelector(".error2").style.display='block';
    } else{
        document.querySelector(".error2").style.display='none';
    }
})



function validateEmail(email){
    const regex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(regex.test(email)){
        return true
    }

    return false
}