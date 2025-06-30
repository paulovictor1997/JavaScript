const getApi = async () => {
  try {
    const response = await fetch("https://api.football-data.org/v4/competitions", {
      method: 'GET',
      headers: {
        "X-Auth-Token": "9ec91597457b491393553a765c180372"
      }
    })
    const data = await response.json()

    if (response === 200) {
      console.log(data)// Mostra todas as competições
    } else {
      console.error(`Erro ${response.status}: ${response.statusText}`)
    }

  } catch (error) {
    console.error("Erro ao buscar dados:", error)
  }
}

//getApi()