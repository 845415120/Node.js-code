var Book = require('../models/book')
var Author = require('../models/author')
var Genre = require('../models/genre')
var BookInstance = require('../models/bookinstance')

var async = require('async')

exports.index = function (req, res) {

  async.parallel({
    book_count: function (callback) {
      Book.count({}, callback) 
    },
    book_instance_count: function (callback) {
      BookInstance.count({}, callback)
    },
    book_instance_available_count: function (callback) {
      BookInstance.count({ status: 'Available' }, callback)
    },
    author_count: function (callback) {
      Author.count({}, callback)
    },
    genre_count: function (callback) {
      Genre.count({}, callback)
    },
  }, function (err, results) {
    res.render('index',
      {
        title: '图书馆',
        error: err, data: results
      })
  })
}
