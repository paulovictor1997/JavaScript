function confirmar(){
    let resultado = document.querySelector('div#resultado')
    let b = document.getElementsByName('radb')
    
    let banda = ''
    let img = document.createElement('img')
    img.setAttribute('id','foto')
    if(b[0].checked){
        banda = 'Metallica'
        if(banda == 'Metallica'){
            img.setAttribute('src','metallica.png')
            resultado.innerHTML+= '<p>Metallica é uma banda norte-americana de heavy metal originária de Los Angeles, mas com base em San Francisco. O seu repertório inclui tempos rápidos, pesados, melódicos, instrumentais e musicalidade agressiva, a qual os colocou no lugar de pioneiros do thrash metal e uma das bandas fundadoras do Big Four of Thrash, conjuntamente com Slayer, Megadeth e Anthrax. Os Metallica formaram-se em 1981, após James Hetfield responder a um anúncio que Lars Ulrich colocou no jornal local. A sua formação atual apresenta os fundadores Ulrich (bateria) e Hetfield (vocal e guitarra base), o guitarrista Kirk Hammett (que se juntou à banda em 1983), e o baixista Robert Trujillo (membro desde 2003). Antes de chegarem à sua formação atual, a banda teve outros integrantes, sendo eles: Dave Mustaine (guitarra), Ron McGovney, Cliff Burton e Jason Newsted (baixo). </p>'
         }
    }
    if(b[1].checked){
        banda = 'Megadeth'
        if(banda == 'Megadeth'){
            img.setAttribute('src','megadeth.png')
            resultado.innerHTML+= '<p>Megadeth é uma banda norte-americana de Thrash metal liderada por seu fundador, o vocalista e guitarrista Dave Mustaine. O grupo foi formado em 1983, após Dave ser demitido do Metallica. Desde então, a banda lançou quinze álbuns de estúdio, quatro álbuns ao vivo, dois EP e cinco compilações.Desde então, a banda lançou outros cinco álbuns: United Abominations (2007), Endgame (2009), TH1RT3EN (2011), Super Collider (2013) e Dystopia (2016). Megadeth faz parte do "Big Four of Thrash", juntamente com Slayer, Metallica e Anthrax.  </p>'
        }
    }
    if(b[2].checked){
        banda = 'Guns n Roses'
        if(banda == 'Guns n Roses'){
            img.setAttribute('src','guns.png')
            resultado.innerHTML+='<p> Guns N Roses (por vezes abreviado como G N R ou GnR) é uma banda norte-americana de hard rock formada em Los Angeles, Califórnia, em 1985. A banda já lançou seis álbuns de estúdio, três EPs e um álbum ao vivo.A banda já vendeu mais de 100 milhões de cópias em todo o mundo,sendo cerca de 43 milhões somente nos Estados Unidos. O seu álbum de estreia lançado em 1987, Appetite for Destruction,vendeu cerca de 33 milhões de cópias no mundo todo, sendo certificado 18 vezes platina pela RIAA (Associação da Indústria de Gravação da América),se tornando o álbum de estreia mais vendido da história da música. A formação atual inclui o vocalista e pianista Axl Rose, os guitarristas Slash e Richard Fortus, o baixista Duff McKagan, o baterista Frank Ferrer e os teclistas Dizzy Reed e Melissa Reese.  </p>'
        }
    }
    resultado.style.textAlign = 'left'    
    resultado.appendChild(img)

}
    

 