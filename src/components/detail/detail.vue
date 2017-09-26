<template>
	<div class="detail">
		<v-header :userName="this.article.userName"></v-header>
		<v-line></v-line>
		<div class="article-content">
			<div class="article-header">
				<h1 class="title">{{this.article.articleTitle}}</h1>
				<span class="type">文章分类：{{this.article.articleType}}</span>
				<span class="time">发布时间：{{this.article.time}}</span>
			</div>
			<div v-html="this.article.articleText"></div>
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
		width: 990px
		min-height: 560px
		background: #fff 
</style>