<template>
	<div class="page">
		<ul>
			<li>
				<i class="icon-arrow_lift" @click="previousPage"></i>
			</li>
			<li>{{this.pageNum}}/{{this.totalPage}}</li>
			<li>
				<i class="icon-keyboard_arrow_right" @click="nextPage"></i>
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
		border: 1px solid #333
		text-align: center
		ul
			li
				display: inline-block
				width: 40px
				height: 40px
				border: 1px solid #333
</style>