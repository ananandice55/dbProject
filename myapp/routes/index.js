var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = mysql.createPool({
  host: 'localhost',
  user: 's59160143',
  password: '060423561',
  database: 's59160143',
  debug: false
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testconnect', function (req, res, next) {
  if(db != null) {
    res.send('connect success');
  }else{
    res.send('connect fail');
  }
});

router.get('/customer', function (req, res, next) {
 db.query('SELECT * FROM tb_book', function (err, rs) {
   res.render('customer', {book: rs});
 });
});

module.exports = router;
