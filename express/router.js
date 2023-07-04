const express = require('express')

const router = express.Router()

router.get('/home', (req, res) => {
  res.send('页面')
})
router.post('/login', (req, res) => {
  res.send('获取用户数据')
})

module.exports = router