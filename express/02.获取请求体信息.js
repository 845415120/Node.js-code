const express = require('express')

const app = express()

app.get('/home', (req, res) => {
  res.send('页面')
})
app.post('/login', (req, res) => {
  res.send('获取用户数据')
})
app.listen(3000,()=>{
  console.log('启动');
})