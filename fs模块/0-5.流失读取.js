const fs = require ('fs')
// 创建读取流对象
const ws = fs.createReadStream('../')
// 绑定事件
ws.on('data',chunk=>{
  console.log(chunk.length);
})
// 关闭
ws.on('end',()=>{

})