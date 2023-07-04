// 
const jwt = require('jsonwebtoken')

// 生成token
// let token = jwt.sign(用户数据, 加密字符串, 配置对象)
// let token = jwt.sign({
//   username: 'jiang',
// }, 'atguig', {
//   expiresIn: 60, //秒
// })
// console.log(token)

let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImppYW5nIiwiaWF0IjoxNjg4Mjc0MDk0LCJleHAiOjE2ODgyNzQxNTR9.fvlpqQ7IoWJW-us85EoAQZriZW3jn_Po5xkWdr7uy6Q'
// 校验token
jwt.verify(t, 'atguig', (err, data) => {
  if (err) {
    console.log('校验失败')
    return
  }
  console.log(data)
})