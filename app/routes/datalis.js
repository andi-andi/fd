var express = require('express');
var router = express.Router();
var pool=require('../pool.js')

//响应食品安全页面
router.get('/food',(req,res)=>{
    var sql='SELECT titleContext FROM fd_anqu WHERE fd_anquid=?';
    pool.query(sql,[req.query.id],(err,result)=>{
        if(err) throw err;
        res.send({massage:"请求成功",code:"ok",result:result[0]});
    });
});

//响应食品通告
router.get('/uid',(req,res)=>{
    var sql='SELECT uid,title,time,text,a1,a2 FROM fd_anqutext WHERE uid=?';
    pool.query(sql,[req.query.uid],(err,result)=>{
        if(err) throw err;
        res.send({massage:"请求成功",code:"ok",result:result[0]});
    });
});

//响应火锅轮播图页面
router.get('/finefood',(req,res)=>{
    var sql='SELECT * FROM fd_hg';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({massage:"请求成功",code:"ok",result:result});
    });
});

//响应商品分类列表接口
router.get('/product',(req,res)=>{
    var sql='SELECT product_id,product_img,product_title,product_zc,product_bf,product_text FROM fd_product WHERE product_fid=?';
    pool.query(sql,[req.query.fid],(err,result)=>{
        if(err) throw err;
        res.send({massage:"请求成功",code:"ok",result:result});
    });
});

//相应商品搜索接口
router.get('/search',(req,res)=>{
    var sql=`SELECT product_id,product_img,product_title,product_zc,product_bf,product_text FROM fd_product WHERE product_title LIKE '%${req.query.input}%'`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({massage:"请求成功",code:"ok",result:result});
    });
});
module.exports = router;
