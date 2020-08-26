var express = require('express');
var router = express.Router();
var pool=require('../pool.js')
/* 响应用户促销价格图片*/
// router.get('/', function(req, res) {
//   var sql='select * from pf_productimg';
//   pool.query(sql,(err,result)=>{
//     if(err) throw err;
//     res.send(result);
//   })
// });
module.exports = router;
