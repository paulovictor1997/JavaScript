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
/* 
const dropbtn = document.querySelectorAll(".dropbtn", "dropbtn-icon")

dropbtn.forEach((btn)=>{
    btn.addEventListener('click', () => {
      btn.classList.toggle("open");
      console.log(btn);
    })
  })
*/