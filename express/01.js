const express = require('express')
// 导入json
const bander = require('./brand.json')

const app = express()

app.get('/bander', (req, res) => {
  res.end(JSON.stringify(bander))

})
app.listen(3000, function () {
  console.log("服务启动")
})