var express = require('express');
var router = express.Router();
var pool=require('../pool.js')


/*验证用户登录*/
router.get("/login",function(req,res){
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql='select uname,upwd from fd_users where uname=? and upwd=?';
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

/*验证用户注册*/
router.post("/loginzc",function(req,res){
    var obj=req.body;
    var sql='INSERT INTO fd_users SET ?';
    pool.query(sql,[obj],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows!=0){
            res.send(result);
        }
    })
})
module.exports = router;
