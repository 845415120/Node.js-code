// 需求
// 新建文件,写入内容

// 导入 require

const fs = require('fs')

// 写入

fs.writeFile('./座右铭.txt', '三人行必有我师焉', err => {
  console.log('写入成功')
  return
})

// 