const http = require('http')

const server = http.createServer((requset, response) => {
  response.end('Hello http')
})
server.listen(3000, () => {
  console.log('服务已经启动!')
})