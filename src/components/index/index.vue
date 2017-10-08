<template>
	<div class="index">
		<v-header :userName="this.userInfo.userName"></v-header>
		<div class="content">
			<div class="left">
				<div class="userInfo">
					<div class="avator">
						<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929251423,454148251&fm=27&gp=0.jpg" width="159" height="159">
					</div>
					<ul class="info-wrapper">
						<li class="info" v-show="this.userInfo.phone">手机号:{{userInfo.phone}}</li>
						<li class="info" v-show="this.userInfo.github">github:{{userInfo.github}}</li>
						<li class="info" v-show="this.userInfo.mail">电子邮箱:{{userInfo.mail}}</li>
					</ul>
					<div class="write-wrapper">
						<router-link :to="{path:'/write',query:{userName:this.userName}}" target="_blank">写文章</router-link>
					</div>
				</div>
				<div class="articleType-wrapper">
					<h1 class="title">文章分类</h1>
					<v-line></v-line>
					<ul>
						<li class="articleType" v-for="item in articleType">{{item}}</li>
					</ul>
				</div>
			</div>
			<div class="right">
				<ul class="tabs-ul">
					<li class="tabs-wrapper" v-for="item in articles">
						<tabs :article="item"></tabs>
					</li>
				</ul>
				<page :userName="this.userName" :pageSize="this.pageSize" @change-page="changePage"></page>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import login from 'components/login/login';
	import header from 'components/header/header';
	import line from 'components/line/line';
	import tabs from 'components/tabs/tabs';
	import page from 'components/page/page';
	import add from 'components/add/add';

	export default {
		components: {
			login,
			'v-header': header,
			'v-line': line,
			tabs,
			page,
			add
		},
		data() {
			return {
				userName: this.$route.query.userName,
				userInfo: {},
				articleType: [],
				articles: [],
				pageNum: 1,
				pageSize: 5
			};
		},
		created() {
			let userName = this.userName;
			let _this = this;
			// 获取用户信息
			this.$http.get('/api/user/getUserInfo', {
				params: {userName: userName}
			}).then(function(res) {
				_this.userInfo = Object.assign({}, _this.userInfo, res.data);
			});
			// 获取该用户的文章分类
			this.$http.get('/api/article/getArticleType', {
				params: {userName: userName}
			}).then(function(res) {
				_this.articleType = res.data.articleType;
			});
			this.getIndexArticle();
		},
		methods: {
			changePage(val) {
				this.pageNum = val;
				this.getIndexArticle();
			},
			getIndexArticle() {
				// 获取首页文章列表
				let _this = this;
				this.$http.get('/api/article/getIndexArticle', {
					params: {
						userName: this.userName,
						pageNum: this.pageNum,
						pageSize: this.pageSize
					}
				}).then(function(res) {
					console.log(res);
					_this.articles = res.data;
				});
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.index
		margin: 0 auto
		min-height: 990px
		width: 1050px
		.content
			display: flex
			margin: 0 auto
			padding-top: 15px
			width: 1000px
			min-height: 800px
		.left
			flex: 0 0 265px
			padding: 0 10px
			box-sizing: box-sizing
			width: 265px
			.userInfo
				padding: 15px
				width: 100%
				box-sizing: border-box
				.avator
					margin: 0 auto
					width: 159px
					height: 159px
					border-radius: 50%
					overflow: hidden
				.info-wrapper
					margin-bottom: 20px
					.info
						margin: 15px 0
						text-align: center
				.write-wrapper
					margin: 0 auto
					width: 80px
					height: 32px
					line-height: 32px
					text-align: center
					background: #fff
					border-radius: 5px
					box-shadow: 2px 2px 2px 4px #ccc
			.articleType-wrapper
				width: 100%
				text-align: center
				.title
					margin-top: 20px
					margin-bottom: 10px
					font-size: 16px
					font-weight: 700
				.articleType
					margin: 10px 0
					text-align: center
					text-decoration: underline
			.write-wrapper
				background: #dedede
		.right
			position: relative
			flex: 1
			padding: 0 10px
			.tabs-ul
				margin-bottom: 80px
			.tabs-wrapper
				width: 100%
			.page
				position: absolute
				bottom: 20px
				left: 50%
				margin-left: -265px
</style>