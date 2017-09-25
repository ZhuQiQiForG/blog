<template>
	<div class="add">
		<button @click="show">添加文章分类</button>
		<div class="addType" v-show="showAdd">
			<h1>分类名称</h1>
			<input type="" name="" placeholder="请输入分类名称" v-model="articleType">
			<button @click="add">添加</button>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{
		props: {
			userName: {
				type: String
			}
		},
		data() {
			return {
				articleType: '',
				showAdd: false
			};
		},
		methods: {
			show() {
				this.showAdd = !this.showAdd;
			},
			add() {
				this.$http.get('/api/article/addArticleType', {
					params: {userName: this.userName, articleType: this.articleType}
				}).then((res) => {
					console.log(res);
				});
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.add
		position: relative
		display: inline-block
		.addType
			position: absolute
			top: 25px
			left: 0
			z-index: 1600
			width: 401px
			height: 115px
			background: #fff
			border: 1px solid #333
</style>