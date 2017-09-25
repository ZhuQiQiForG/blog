const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
    let userName = req.body.userName;
    let password = req.body.password;
    let repassword = req.body.repassword;
    let phone = req.body.phone;
    let github = req.body.github;
    let mail = req.body.mail;
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
    let newAccount = new models.Login({
        userName: userName,
        password: password,
        phone,
        github,
        mail
    });
    models.Login.findOne({userName: userName, password: password}, function(err, doc) {
        if (doc == null) {
            newAccount.save((err, data) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send('账号创建成功');
                }
            })
        } else {
            res.send('用户名已存在');
        }
    });
});
// 登录验证
router.post('/api/login/login', (req, res) => {
    let userName = req.body.userName;
    let password = req.body.password;
    if (userName) {
        models.Login.findOne({userName: userName}, function(err, doc) {
            if (doc == null) {
                res.send('用户不存在');
            } else if (doc.password === password) {
                res.send('successed');
            } else {
                res.send('密码错误');
            }
        });
    } else {
        res.send('请输入用户名');
    }
});

// 获取用户信息 get方法和post方法获取数据方式不同 post:req.body; get: req.query;
router.get('/api/user/getUserInfo', (req, res) => {
    let userName = req.query.userName;
    models.Login.findOne({userName: userName}, function(err, doc) {
        return res.json(doc);
    });
});

// 获取用户文章分类信息
router.get('/api/article/getArticleType', (req, res) => {
	let userName = req.query.userName;
	models.type.findOne({userName: userName}, function(err, doc) {
		return res.json(doc);
	});
});

// 创建用户文章分类
router.get('/api/article/addArticleType', (req, res) => {
	let userName = req.query.userName;
	let articleType = [];
	articleType.push(req.query.articleType);
	let newArticleType = new models.type({
		userName: userName,
		articleType: articleType
	});
	if (articleType[0]) {
		models.type.findOne({userName: userName}, function(err, doc) {
			if (doc) {
				let olddata = doc;
				if (!olddata.articleType.indexOf(articleType[0])) {
					res.send('分类已存在');
				} else {
					olddata.articleType.push(articleType[0]);
					let newdata = {$set: {articleType:olddata.articleType}};
					models.type.update(doc.articleType,newdata,function(err, result) {
						if (err) {
							res.send(err);
						} else {
							res.send('文章分类添加成功');
						}
					});
				}
			} else {
				newArticleType.save((err, data) => {
					if (err) {
						res.send(err);
					} else {
						res.send('文章分类添加成功');
					}
				});
			}
		})
	} else {
		res.send('分类名不能为空');
	}
});

// 上传文章
router.get('/api/article/submitArticle', (req, res) => {
	let userName = req.query.userName;
	let time = req.query.time;
	let articleTitle = req.query.articleTitle;
	let articleType = req.query.articleType;
	let articleDesc = req.query.articleDesc;
	let articleText = req.query.articleText;
	let article = new models.article({
		userName: userName,
		time: time,
		articleTitle: articleTitle,
		articleType: articleType,
		articleDesc: articleDesc,
		articleText: articleText
	});
	if (articleTitle && articleType && articleText) {
		article.save((err, data) => {
			if (err) {
				res.send(err);
			} else {
				res.send('提交成功');
			}
		});
	} else {
		res.send('标题、正文、类型不能为空');
	}
});

//读取文章
router.get('/api/article/getArticle', (req, res) => {
	let userName = req.query.userName;
	models.article.find({userName: userName}, (err, docs) => {
		if (err) {
			res.send(err);
		} else {
			console.log(docs);
			res.json(docs);
		}
	});
})

module.exports = router;