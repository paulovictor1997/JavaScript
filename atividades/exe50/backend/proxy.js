import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 3000

// Libera o acesso do frontend
app.use(cors())

// Rota para buscar ligas da API Football-Data
app.get('/ligas', async (req, res) => {
  try {
    const response = await fetch('https://api.football-data.org/v4/competitions', {
      headers: {
        'X-Auth-Token': process.env.API_TOKEN
      }
    });

    const data = await response.json()
    res.json(data); // Devolve os dados pro frontend
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error)
    res.status(500).json({ error: 'Erro interno no servidor proxy' })
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor proxy rodando em http://localhost:${PORT}`);
})
