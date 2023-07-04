const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  let html = fs.readFileSync('./1.html')

  res.end(html)
})
server.listen(3000, () => {
  console.log('服务已经启动')
})