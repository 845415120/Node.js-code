const express = require('express')

const app = express()

app.get('url', (req, res) => {
  res.end('hello')
})
app.listen(3000, () => {
  console.log('启动!')
})
