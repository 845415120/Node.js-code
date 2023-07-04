var express = require('express')
var router = express.Router()

//lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)

// 导入shortid
const shortid = require('shortid')

// 记账本列表
router.get('/account', function (req, res, next) {
  let accounts = db.get('accounts').value()
  res.render('list', { accounts: accounts })
})
// 添加记录
router.get('/account/create', function (req, res, next) {
  res.render('create')
})
// 新增记录
router.post('/account', (req, res) => {
  // //获取请求
  console.log(req.body)
  // 生成id
  let id = shortid.generate()
  // 写入文件
  db.get('accounts')
    .unshift({ id: id, ...req.body })
    .write()
  res.render('success', { msg: "添加成功~", url: '/account' })
})

// 删除
router.get('/account/:id', (req, res) => {
  // 获取param的id
  let id = req.params.id
  db.get('accounts').remove({ id: id }).write()
  res.render('success', { msg: "删除成功~", url: '/account' })
})
module.exports = router
