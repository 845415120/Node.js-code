const fs = require('fs')

const files = fs.readdirSync('../fs模块')
// 遍历数组

files.forEach(item => {
  let data = item.split(0) 
  let [num,name] =data
 num = '0'+num
 let newName = num + '-' + name
 fs.renameSync(`../fs模块/${item}`,`../fs模块/${newName}`)
 console.log(newName);
})
