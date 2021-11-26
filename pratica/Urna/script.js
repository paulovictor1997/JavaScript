//CONTROLES DE INTERFACE
let votoPara = document.querySelector('.d1-1 span');
let cargo = document.querySelector('.d1-2 span');
let descricao = document.querySelector('.d1-4');
let aviso = document.querySelector('.d2');
let lateral = document.querySelector('.d1-right');
let numeros = document.querySelector('.d1-3');
//--------------------------------------------
//a função abaixo vai limpar a tela, pegar às informações da etapa atual e preencher às informações
let etapaAtual = 0;
let numero = '';
let votoBranco = true;
let votos = [];

const comecarEtapa = ()=>{
    let etapa = etapas[etapaAtual];
    let numeroHTML = '';
    numero = '';
    votoBranco = false;
    
    for(let i=0;i<etapa.numeros;i++){
        if(i===0){
            numeroHTML += '<div class="numero pisca"></div>';
        }else{
            numeroHTML += '<div class="numero"></div>';
        }
    }

    votoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}

const atualizaInterface = ()=>{
    /* 
    console.log('Atualizando interface');
    console.log(numero);
    */
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        } else{
            return false;
        }
    });

    if(candidato.length > 0){
       candidato = candidato[0];
       votoPara.style.display = 'block';
       aviso.style.display = 'block';
       descricao.innerHTML = `Nome : ${candidato.nome}<br/>Partido : ${candidato.partido} <br/>Vice: ${candidato.vice}`; 

       let fotoHTML = '';
       for(let i in candidato.fotos){
            fotoHTML += `<div class="dImage"><img src="img/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
       }
       lateral.innerHTML += fotoHTML;
    } else{
        votoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML ='<div class="aviso--grande pisca">VOTO NULO</div>';
    }
}

const clicou = (n)=>{
    //console.log(`clicou em ${n}`);
    let elNumero = document.querySelector('.numero.pisca');
    if( elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');        
        } else {
            atualizaInterface();
        }
    
    }
}

const branco = ()=>{
    if(numero === ''){
        votoBranco = true;
        votoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
        lateral.innerHTML = '';
    } else{
        alert('para votar em branco, não pode ser digitado em nenhum número');
    }
}

const confirmar = ()=>{
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;
    
    if(votoBranco === true){
        votoConfirmado = true;
        votos.push({
            etapa:etapas[etapaAtual].titulo,
            voto:'branco'
        });
        //console.log('branco');
    } else if(numero.length === etapa.numeros){
        votoConfirmado = true; 
        votos.push({
            etapa:etapas[etapaAtual].titulo,
            voto: numero
        });
        //console.log(`Confirmado como : ${numero}`);
    }

    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        } else{
            document.querySelector('.tela').innerHTML = '<div class="aviso--maior pisca">FIM</div>';
            console.log(votos);
        }
    }
}

const corrige = ()=>{
    comecarEtapa();
}

comecarEtapa();