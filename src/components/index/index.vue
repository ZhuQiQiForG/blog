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
						<li class="articleType" v-for="item in articleType">{{item.text}}</li>
					</ul>
				</div>
			</div>
			<div class="right">
				<ul>
					<li class="tabs-wrapper" v-for="item in articles">
						<tabs :article="item"></tabs>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import login from 'components/login/login';
	import header from 'components/header/header';
	import line from 'components/line/line';
	import tabs from 'components/tabs/tabs';

	export default {
		components: {
			login,
			'v-header': header,
			'v-line': line,
			tabs
		},
		data() {
			return {
				userName: this.$route.query.userName,
				userInfo: {},
				articleType: [
					{text: 'HTML'},
					{text: 'CSS'},
					{text: 'JS,ES2015,ES2016'}
				],
				articles: [
					{
						title: 'test1',
						time: '2017-09-20 17:34:21',
						hits: 2,
						comments: 0,
						desc: 'first test first testfirst testfirst testfirst testfirst testfirst testfirst testfirst testfirst testfirst testfirst testfirst testfirst testfirst test',
						article: '文章文章文章文章文章文章文章文章文章,文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章'
					},
					{
						title: 'test2',
						time: '2017-09-20 17:34:21',
						hits: 3,
						comments: 1,
						desc: '',
						article: '文章文章文章文章文章文章文章文章文章，文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章'
					},
					{
						title: 'test1',
						time: '2017-09-20 17:34:21',
						hits: 0,
						comments: 0,
						desc: '',
						article: '文章文章文章文章文章文章文章文章文章，文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章，文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章'
					}
				]
			};
		},
		created() {
			let userName = this.userName;
			let _this = this;
			this.$http.get('/api/user/getUserInfo', {
				params: {userName: userName}
			}).then(function(res) {
				_this.userInfo = Object.assign({}, _this.userInfo, res.data);
			});
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
		.right
			flex: 1
			padding: 0 10px
</style>