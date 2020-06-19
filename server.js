const express = require('express')

const PORT = '8080'
const HOST = 'localhost'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(PORT, HOST)

console.log(`Running no http://${HOST}:${PORT}`)