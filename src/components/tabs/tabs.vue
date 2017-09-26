<template>
	<div class="tabs">
		<div class="articleHeader">
			<h1 class="title">{{article.articleTitle}}</h1>
			<div class="info">
				<span>{{article.time}}</span>
				<span>点击{{article.hits}}</span>
				<span>评论{{article.comments}}</span>
			</div>
		</div>
		<p class="desc">{{article.articleDesc}}</p>
		<div class="readAll">
			<router-link :to="{path:'/detail',query:{id: this.article._id}}">阅读全文>></router-link>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		props: {
			article: {
				type: Object
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.tabs
		margin-bottom: 30px
		padding: 20px 30px
		width: 570px
		border: 1px solid #333
		border-radius: 8px
		.articleHeader
			.title
				margin-bottom: 16px
				height: 40px
				line-height: 40px
				font-size: 20px
				font-weight: 700
			.info
				padding-bottom: 15px
				color: #c1c1c1
				border-bottom: 1px dashed #333
				span
					display: inline-block
					margin-right: 10px
		.desc
			padding: 15px 0
			line-height: 26px
		.readAll
			font-size: 14px
			color: #c14f4f
</style>