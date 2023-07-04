const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')

const db = low(adapter)
//初始化db
db.defaults({ posts: [], user: {} })
  .write()
//写入数据
db.get('posts')
  .unshift({ id: 3, title: '就那天天气和' })
  .write()
//获取数据
db.get('posts').value()
// 删除