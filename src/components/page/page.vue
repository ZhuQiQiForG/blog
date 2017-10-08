<template>
	<div class="page">
		<ul>
			<li @click="previousPage" class="pAndn">
				<i class="icon-arrow-left2"></i>
			</li>
			<li>{{this.pageNum}}/{{this.totalPage}}</li>
			<li @click="nextPage" class="pAndn">
				<i class="icon-arrow-right2"></i>
			</li>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		props: {
			userName: {
				type: String
			},
			pageSize: {
				type: Number
			}
		},
		data() {
			return {
				totalNum: 0,
				pageNum: 1,
				totalPage: 0
			};
		},
		created() {
			let _this = this;
			this.$http.get('/api/article/getArticle', {
				params: {userName: this.userName}
			}).then(function(res) {
				_this.totalNum = res.data.length;
				_this.totalPage = Math.ceil(_this.totalNum / _this.pageSize);
			});
		},
		methods: {
			previousPage() {
				if (this.pageNum > 1) {
					this.pageNum = this.pageNum - 1;
					this.$emit('change-page', this.pageNum);
				}
			},
			nextPage() {
				if (this.pageNum < this.totalPage) {
					this.pageNum = this.pageNum + 1;
					this.$emit('change-page', this.pageNum);
				}
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.page
		width: 430px
		height: 40px
		line-height: 40px
		text-align: center
		ul
			li
				display: inline-block
				width: 40px
				height: 40px
			.pAndn
				border-radius: 50%
				&:hover
					cursor: pointer
					background: #ccc
				.icon-arrow_lift
					font-size: 16px
				.icon-keyboard_arrow_right
					font-size: 18px
</style>