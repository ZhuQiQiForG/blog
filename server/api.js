const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
    let userName = req.body.userName;
    let password = req.body.password;
    let repassword = req.body.repassword;
    // 验证账号信息
    if (!userName) {
    	res.send('请输入用户名且不为空');
    	return;
    }
    if (!password) {
    	res.send('请输入密码且不为空');
    	return;
    }
    if (!repassword) {
    	res.send('请确认密码且不为空');
    	return;
    } else if (repassword !== password) {
    	res.send('请确保两次密码输入一致');
    	return;
    }
    res.send('成功注册');
});
// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
    // 通过模型去查找数据库
    models.Login.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;