cavaleiros.map((item)=>{
    //Clone Node - Vai fazer uma cópia de um elemento HTML, se dentro dos parênteses estiver "false", ele vai pegar somente o principal, caso contrario se estiver "true", ele vai pegar o elemento que foi especificado.
    let gold = document.querySelector('.models .cavs-item').cloneNode(true);
    document.querySelector('.area').append(gold);

    //Preenchendo a tela inicial
    gold.querySelector('.cavs-item--img img').src = item.img;
    gold.querySelector('.cavs-item--name').innerHTML = `${item.name} de ${item.constellation}`;

    //Função para quando clicar no link a página não irá atualizar
    gold.querySelector('.cavs-item a ').addEventListener('click',(e)=>{
        e.preventDefault()
        console.log('clicou')
        //Abrindo a janela modal
        document.querySelector('.modal-area').style.display = 'flex';

        //Preenchendo os dados
        document.querySelector('.cavsBig img').src = item.img;
        document.querySelector('.name').innerHTML = `${item.name} de ${item.constellation}`;
        document.querySelector('.born').innerHTML = `Local de nascimento - ${item.born}`;
        document.querySelector('.age').innerHTML = `Idade - ${item.idade}`;
        document.querySelector('.description').innerHTML = item.description;
    })

    //Fechando a janela modal
    document.querySelector('.cancelButton').addEventListener('click',()=>{
        document.querySelector('.modal-area').style.display = 'none';
    })

    //Fechando a janela modal no mobile
    document.querySelector('.mobileButton').addEventListener('click',()=>{
        document.querySelector('.modal-area').style.display = 'none';
    })

})