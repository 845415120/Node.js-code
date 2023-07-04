//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose')
//3. 连接数据库                              数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')
//4.设置回调
mongoose.connection.once('open', () => {
  console.log('连接成功')
  //5. 创建文档结构对象
  // 设置集合中 文档的属性以及属性值得类型
  let BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
  })
  //6. 创建文档模型对象  对文档操作的封装对象  mongoose会使用集合名称的复数，创建集合
  let BookModel = mongoose.model('book', BookSchema)
  //7. 插入文档
  BookModel.create({
    title: '西游记',
    author: '吴承恩',
    price: 19.9
  })

})
mongoose.connection.once('error', () => {
  console.log('连接失败')
})
mongoose.connection.once('close', () => {
  console.log('连接关闭')
})