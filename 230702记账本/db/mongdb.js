// 导入 mongoose 模块
const mongoose = require('mongoose')

// 设置默认 mongoose 连接
const mongoDB = 'mongodb://127.0.0.1/my_database'
mongoose.connect(mongoDB)
// 让 mongoose 使用全局 Promise 库
mongoose.Promise = global.Promise
// 取得默认连接
const db = mongoose.connection

// 将连接与错误事件绑定（以获得连接错误的提示）
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'))

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 18
  },
  email: String
})

const User = mongoose.model('User', userSchema)

const user = new User({
  name: 'John Doe',
  age: 25,
  email: 'john@example.com'
})

user.save().then(() => {
  console.log('User saved successfully')
}).catch((err) => {
  console.error('Error saving user:', err)
})