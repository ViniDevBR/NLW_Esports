import { PrismaClient } from '@prisma/client'
import Express, { request, response } from 'express'

const app = Express()
const prisma = new PrismaClient()

app.get('/games',async (request, response) => {
  const games = await prisma.game.findMany()
  return response.json([games])
})

app.post('/ads', (request, response) => {
  return response.status(201).json([])
})

app.get('/games/:id/ads', (request, response) => {
  //const gameId = request.params.id
  return response.json([
    { id: 1, name: 'anuncio 1'},
    { id: 2, name: 'anuncio 2'},
    { id: 3, name: 'anuncio 3'},
    { id: 4, name: 'anuncio 4'},
    { id: 5, name: 'anuncio 5'}
  ])
})

app.get('/ads/:id/discord', (request, response) => {
  //const discord Id = request.params.id
  return response.json([])
})

app.listen(3333)
console.log('Server ONLINE!!!')
