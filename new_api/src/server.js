const express = require('express')
const app = express()
const usuariosRoutes = require('./routes/users')

app.use(express.json())
app.use('/usuarios', usuariosRoutes)

app.listen(3000, ()=> console.log('API rodando em http://localhost:3000'))