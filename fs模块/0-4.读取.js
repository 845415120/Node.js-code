const fs = require('fs')

// fs.readFile('./观书有感.txt', (err, data) => {
//   if (err) {
//     console.log('读取失败')
//     return
//   }
//   console.log(data.toString())
// })

let data = fs.readFileSync('./观书有感.txt')
console.log(data.toString())