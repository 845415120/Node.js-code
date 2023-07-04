const express = require('express')

const app = express()

app.get('/cookie', (req, res) => {
  res.cookie('name', 'jiang', { maxAge: 10000 })
  res.send('jiang')
})

app.get('/remove-cookie', (req, res) => {
  res.clearCookie('name', 'jiang', { maxAge: 10000 })
  res.send('jiang')
})



app.listen(3000)