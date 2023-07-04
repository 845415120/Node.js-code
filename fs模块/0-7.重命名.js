const fs = require('fs')
// 重命名
fs.rename('../座右铭-3.txt', '../论语.txt', err => {
  return
})
// 移动
fs.rename('../座右铭-2.txt', '../fs模块/座右铭-2.txt', err => {
  return
})