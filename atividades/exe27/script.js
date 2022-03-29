function openMenu(){
    const openButton = document.querySelector('.open-button');
    const closeButton = document.querySelector('.close-button');
    const menu = document.querySelector('.menu');

    openButton.classList.add('hidden');
    closeButton.classList.remove('hidden');
    menu = setTimeout(()=>{
        menu.classList.add('show')
    },100);
    
}

function closeMenu(){
    const openButton = document.querySelector('.open-button');
    const closeButton = document.querySelector('.close-button');
    const menu = document.querySelector('.menu');

    openButton.classList.remove('hidden');
    closeButton.classList.add('hidden');
    menu.classList.remove('show');
}
