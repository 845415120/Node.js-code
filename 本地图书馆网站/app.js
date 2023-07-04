var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var catalogRouter = require('./routes/catalog')

var app = express()
//连接MongoDB
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/jiang', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('连接数据库成功!')
  })
  .catch((error) => {
    console.error('Error connecting to the database', error)
  })

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/catalog', catalogRouter)

// 捕获 404 并抛给错误处理器
app.use(function (req, res, next) {
  next(createError(404))
})

// 错误处理器
app.use(function (err, req, res, next) {
  // 设置 locals，只在开发环境提供错误信息
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  //渲染出错页面
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
