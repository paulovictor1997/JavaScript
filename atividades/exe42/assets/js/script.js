/* Menu*/
function openMenu(){
    document.querySelector('.open').style.display = 'none';
    document.querySelector('.close').style.display = 'block';
    document.querySelector('.menu-mobile').style.display = 'block';
}

function closeMenu(){
    document.querySelector('.open').style.display = 'block';
    document.querySelector('.close').style.display = 'none';
    document.querySelector('.menu-mobile').style.display = 'none';
}

/* Bookmark areas*/
const simple = document.querySelector('.simple');
const speedy = document.querySelector('.speedy');
const easy = document.querySelector('.easy');

simple.addEventListener('click',()=>{
    document.querySelector('.book-mark-1').style.display='block';
    document.querySelector('.book-mark-2').style.display='none';
    document.querySelector('.book-mark-3').style.display='none';
})

speedy.addEventListener('click',()=>{
    document.querySelector('.book-mark-2').style.display='block';
    document.querySelector('.book-mark-1').style.display='none';
    document.querySelector('.book-mark-3').style.display='none';
})

easy.addEventListener('click',()=>{
    document.querySelector('.book-mark-3').style.display='block';
    document.querySelector('.book-mark-1').style.display='none';
    document.querySelector('.book-mark-2').style.display='none';
})

/* FAQ */
const items = document.querySelectorAll(".accordion button");
function toggleAccordion(){
    const itemToggle = this.getAttribute("aria-expanded");
    for(i = 0; i < items.length; i++){
        items[i].setAttribute("aria-expanded", "false");
    }

    if(itemToggle == "false"){
        this.setAttribute("aria-expanded", "true");
    }
}
items.forEach(item => item.addEventListener('click',toggleAccordion));

/* Email Validation*/
const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(emailInput.value === '' || !validateEmail(emailInput.value)){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.erroIcon').style.display = 'block';
    } else{
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.erroIcon').style.display = 'none';
    }
});

function validateEmail(email){
    const regex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(regex.test(email)){
        return true;
    } else{
        return false;
    }
}