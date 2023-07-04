const fs = require('fs')
fs.appendFile('./座右铭.txt', '\r\n自强善者而从之', err => {
  console.log('追加写入')
})