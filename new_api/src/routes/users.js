const express = require('express')
const router = express.Router()
let usuarios = require('../data/db')

router.get('/', (req,res) => res.json(usuarios))

router.get('/:id', (req,res)=>{
    const usuario = usuarios.find(u => u.id === Number(req.params.id))
    if(!usuario) return res.status(404).json({erro:'Não encontrado'})
    res.json(usuario)
})

router.post('/', (req,res)=>{
    const novo = {id: Date.now(), ...req.body}
    usuarios.push(novo)
    res.status(201).json(novo)
})

router.put('/:id',(req,res)=>{
    const idx = usuarios.findIndex(u => u.id === Number(req.params.id))
    if(idx === -1) return res.status(404).json({erro:'Não encontrado'})
    usuarios[idx] = {...usuarios[idx], ...req.body}
    res.json(usuarios[idx])
})

router.delete('/:id',(req,res)=>{
    usuarios = usuarios.filter(u => u.id !== Number(req.params.id))
    res.status(204).send()
})

module.exports = router