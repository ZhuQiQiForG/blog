<template>
	<div class="detail">
		<v-header :userName="this.article.userName"></v-header>
		<div class="article-content">
			<div class="article-header">
				<h1 class="title">{{this.article.articleTitle}}</h1>
				<span class="type">文章分类：{{this.article.articleType}}</span>
				<span class="time">发布时间：{{this.article.time}}</span>
			</div>
			<div class="text" v-html="this.article.articleText"></div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import header from 'components/header/header';
	import line from 'components/line/line';

	export default{
		components: {
			'v-header': header,
			'v-line': line
		},
		data() {
			return {
				id: this.$route.query.id,
				article: {}
			};
		},
		created() {
			let _this = this;
			this.$http.get('/api/article/getArticleDetail', {
				params: {id: this.id}
			}).then((res) => {
				console.info(res.data);
				_this.article = res.data;
			});
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.detail
		margin: 0 auto
		width: 900px
		min-height: 560px
		.article-content
			padding: 20px
			box-sizing: border-box
			width: 100%
			min-height: 800px
			background: #fff
			border-radius: 15px
			box-shadow: 1px 1px 1px 2px #ccc
			.article-header
				padding-bottom: 10px
				width: 100%
				text-align: center
				border-bottom: 1px dashed #333
				font-size: 14px
				.title
					margin-bottom: 10px
					font-size: 26px
					color: #666666
			.text
				padding: 40px
</style>