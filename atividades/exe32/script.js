let card = document.querySelector('.card');
let cardThanks = document.querySelector('.card-2');
let listNumbers = document.querySelectorAll('.list li');
let description = document.querySelector('.description-2');

let feed = 0;

function selectNumbers(number) {
    for(const list of listNumbers){
        list.classList.remove('selected');
    }

    feed = number;
    listNumbers[number-1].classList.add('selected');
}


function submit() {
    description.innerText = `You selected ${feed} of 5`;
    card.style.display = 'none';
    cardThanks.style.display = 'block';
}