/*
- Função principal : requisição da API.
- Main function : Call API.
*/
const getApi = async () => {
  try {
      const response = await fetch("http://localhost:3000/ligas")
      const data = await response.json()

  if(response.ok){
      detailCards(data.competitions)
      console.log(data.competitions)
    } else {
      console.error(`Erro ${response.status}: ${response.statusText}`)
  }
  } catch (error) {
      console.error("Erro ao buscar ligas:", error)
  }
}

/*
- Função para os detalhes do card
- Function for the details card  
*/
const detailCards =(competitions)=>{
  const cards = document.querySelectorAll(".card")
  cards.forEach(card => {
    const code = card.dataset.code
    const league = competitions.find(item => item.code === code)

    if(league){
      const img = document.createElement("img")
      img.src = league.emblem
      img.alt = league.name

      const p = document.createElement("p")
      //p.textContent = league.area.name

      card.insertBefore(img,card.firstChild)
      card.appendChild(p)
    }
  })
}


getApi()