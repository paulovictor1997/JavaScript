function openMenu(){
    const openButton = document.querySelector('.open-button');
    const closeButton = document.querySelector('.close-button');
    const menu = document.querySelector('.menu');

    openButton.classList.add('hidden');
    closeButton.classList.remove('hidden');
    menu.classList.add('show');
}

function closeMenu(){
    const openButton = document.querySelector('.open-button');
    const closeButton = document.querySelector('.close-button');
    const menu = document.querySelector('.menu');

    openButton.classList.remove('hidden');
    closeButton.classList.add('hidden');
    menu.classList.remove('show');
}