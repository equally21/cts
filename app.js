const express = require('express')
const app = express()
const port = 3000

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/version', (req, res) => {
  res.send('1.0.0')
})

app.listen(port, () => {
  console.log(`CTS is listening on: ${port}`)
})