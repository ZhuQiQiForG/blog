<template>
	<div class="add">
		<button @click="show" class="addTypeButton">添加文章分类</button>
		<div class="addType" v-show="showAdd">
			<h1 class="title">分类名称</h1>
			<input type="" name="" placeholder="请输入分类名称" v-model="articleType" class="addInput">
			<button @click="add" class="addButton">添加</button>
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
				let _this = this;
				this.$http.get('/api/article/addArticleType', {
					params: {userName: this.userName, articleType: this.articleType}
				}).then((res) => {
					console.log(res);
					if (res.data === '文章分类添加成功') {
						_this.change();
					}
				});
			},
			change() {
				let _this = this;
				// 在vue2.0中 子组件像父组件传值的双向绑定不能像vue1.0中直接改变，要通过$emit方法来实现
				this.$http.get('/api/article/getArticleType', {
					params: {userName: this.userName}
				}).then(function(res) {
					_this.$emit('change-ArticleTypeContent', res.data.articleType);
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
			top: 22px
			left: 10px
			padding: 10px
			z-index: 1600
			width: 280px
			height: 20px
			background: #FFFAFA
			border: 1px solid #ccc
			border-radius: 5px
			.title
				display: inline-block
				margin-bottom: 20px
			.addInput
				border-top: none
				border-left: none
				border-right: none
				border-bottom: 1px solid #333
				background: #FFFAFA
			.addButton
				display: inline-block
				padding: 2px 4px
				border-radius: 5px
				background: #fff
				border: none
				box-shadow: 1px 1px 1px 3px #ccc
		.addTypeButton
			display: inline-block
			margin-left: 10px
			padding: 2px 4px
			border-radius: 5px
			background: #fff
			border: none
			box-shadow: 1px 1px 1px 3px #ccc
</style>