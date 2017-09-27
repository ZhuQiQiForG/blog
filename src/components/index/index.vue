<template>
	<div class="index">
		<v-header :userName="this.userInfo.userName"></v-header>
		<v-line></v-line>
		<div class="content">
			<div class="left">
				<div class="userInfo">
					<div class="avator">
						<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929251423,454148251&fm=27&gp=0.jpg" width="159" height="159">
					</div>
					<ul>
						<li class="info">手机号:{{userInfo.phone}}</li>
						<li class="info">github:{{userInfo.github}}</li>
						<li class="info">电子邮箱:{{userInfo.mail}}</li>
					</ul>
				</div>
				<v-line></v-line>
				<div class="articleType-wrapper">
					<h1 class="title">文章分类</h1>
					<ul>
						<li class="articleType" v-for="item in articleType">{{item}}</li>
					</ul>
				</div>
				<div class="write-wrapper">
					<router-link :to="{path:'/write',query:{userName:this.userName}}" target="_blank">写文章</router-link>
				</div>
			</div>
			<div class="right">
				<ul>
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

	export default {
		components: {
			login,
			'v-header': header,
			'v-line': line,
			tabs,
			page
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
		width: 990px
		min-height: 560px
		background: #fff
		.content
			display: flex
			margin: 0 auto
			padding-top: 15px
			width: 950px
		.left
			flex: 0 0 265px
			padding: 0 10px
			box-sizing: box-sizing
			width: 265px
			border-right: 1px solid #333
			.userInfo
				width: 100%
				.avator
					margin: 0 auto
					width: 159px
					height: 159px
					border-radius: 50%
					overflow: hidden
				.info
					margin: 10px 0
					text-align: center
			.articleType-wrapper
				width: 100%
				text-align: center
				.title
					margin-top: 20px
					font-size: 16px
					font-weight: 700
				.articleType
					margin: 10px 0
					text-align: center
					text-decoration: underline
			.write-wrapper
				background: #dedede
		.right
			flex: 1
			padding: 0 10px
</style>