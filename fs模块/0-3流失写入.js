// 导入 fs
const fs = require('fs')
// 创建一个可以写入的流，写入到文件 output.txt 中
var ws = fs.createWriteStream('./观书有感.txt')
// 写入
ws.write('半亩方糖一件开\r\n')
ws.write('天光无色共徘徊\r\n')
ws.write('问渠哪得清如许\r\n')
ws.write('为有源头活水来\r\n')
ws.write('半亩方糖一件开\r\n')
