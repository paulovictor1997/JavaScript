const menu = document.querySelector('.menu');
const menuLateral = document.querySelector('.active');

document.querySelector('.hamburguer').addEventListener('click',()=>{
    menu.classList.toggle('menu');
    menuLateral.classList.toggle('active');
})