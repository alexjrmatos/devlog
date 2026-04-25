const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const entryRoutes = require('./routes/entryRoutes')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch((err) => console.error('❌ Erro ao conectar MongoDB:', err))

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'DevLog API rodando' })
})

app.use('/entries', entryRoutes)

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
})