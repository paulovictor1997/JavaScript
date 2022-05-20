cavaleiros.map((item,index)=>{
    //Clone Node - Vai fazer uma cópia de um elemento HTML, se dentro dos parênteses estiver "false", ele vai pegar somente o principal, caso contrario se estiver "true", ele vai pegar o elemento que foi especificado.
    let gold = document.querySelector('.models .cavs-item').cloneNode(true);

    document.querySelector('.area').append(gold);
    //Preenchendo a tela inicial
    gold.querySelector('.cavs-item--img img').src = item.img;
    gold.querySelector('.cavs-item--name').innerHTML = `${item.name} de ${item.constellation}`

    gold.querySelector('.cavs-item a ').addEventListener('click',(e)=>{
        e.preventDefault()
        console.log('clicou')
    })
})