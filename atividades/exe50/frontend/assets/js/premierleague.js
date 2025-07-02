import {news} from "./noticias.js"

const code = "PL"

const leagueInformations = async () => {
    try {
        const response = await fetch('http://localhost:3000/ligas')
        const data = await response.json()

       const league = data.competitions.find(item => item.code === code);
       if (!league) return

       document.querySelector(".logo-league").src = league.emblem
       document.querySelector(".logo-league").alt = league.name
       document.querySelector(".country-league").textContent = league.area.name

    } catch (error) {
        console.error("Erro ao buscar dados da liga",error)
    }
}

const fillNews = () =>{
    const list = document.querySelector(".news-list")

    if (news[code]) {
    news[code].forEach(noticia => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = "#"
      a.textContent = noticia
      li.appendChild(a)
      list.appendChild(li)
    });
  }
}

leagueInformations()
fillNews()