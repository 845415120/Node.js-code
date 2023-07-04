const fs = require('fs')
// 同步
// let data = fs.readFileSync('../座右铭.txt')
// fs.writeFileSync('../座右铭-2.txt', data)

// 流式 
const rs = fs.createReadStream('../座右铭.txt')
const ws = fs.createWriteStream('../座右铭-3.txt')

rs.on('data', chunk => {
  ws.write(chunk)
})