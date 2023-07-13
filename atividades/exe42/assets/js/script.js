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

/* Corrigir essa parte */
const dropbtn = document.querySelectorAll('.dropbtn');
dropbtn.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.classList.toggle("open");
        document.querySelector('.answer').style.display = 'block';
       
    })
})
