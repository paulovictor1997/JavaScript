import {noticias} from "./noticias.js"

const code = "BSA"

const leagueInformations = async () => {
    try {
        const response = await fetch('http://localhost:3000/ligas')
        const data = await response.json()

       const league = data.competitions.find(item => item.code === code);
       if (!league) return

    } catch (error) {
        
    }
}

