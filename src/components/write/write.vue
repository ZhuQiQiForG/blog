<template>
	<div class="write">
		<div class="table-wrapper">
			<table class="write-edit">
				<tr>
					<td>
						<label for="articleTitle" class="title">标题</label>
					</td>
					<td>
						<input type="" name="" id="articleTitle" v-model="articleTitle" class="titleInput">
					</td>
				</tr>
				<tr>
					<td>
						<label for="articleType" class="title">文章分类</label>
					</td>
					<td>
						<select class="selectarticleType" v-model="articleType">
							<option v-for="item in articleTypeContent" :value="item">{{item}}</option>
						</select>
						<add :userName="this.userName"></add>
					</td>
				</tr>
				<tr>
					<td>
						<label for="articleDesc" class="title">文章描述</label>
					</td>
					<td>
						<input type="" name="" id="articleDesc" v-model="articleDesc" class="desc" placeholder="请输入文章描述，不超过200字">
					</td>
				</tr>
				<tr>
					<td>
						<label for="articleText" class="title">正文</label>
					</td>
					<td>
						<div class="editor-wrapper">
							<mavon-editor v-model="articleText" style="width: 840px;height: 600px"/>
						</div>
					</td>
				</tr>
			</table>
			<button @click="submit">提交</button>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import add from 'components/add/add';
	import {nowDate} from 'common/js/date';

	export default {
		data() {
			return {
				userName: this.$route.query.userName,
				articleTitle: '',
				articleType: '',
				articleDesc: '',
				articleText: '',
				time: '',
				articleTypeContent: []
			};
		},
		created() {
			let _this = this;
			this.$http.get('/api/article/getArticleType', {
				params: {userName: this.userName}
			}).then(function(res) {
				_this.articleTypeContent = res.data.articleType;
			});
		},
		methods: {
			submit() {
				this.time = nowDate();
				console.log(this.time);
				this.$http.get('/api/article/submitArticle', {
					params: {
						userName: this.userName,
						time: this.time,
						articleTitle: this.articleTitle,
						articleType: this.articleType,
						articleDesc: this.articleDesc,
						articleText: this.articleText
					}
				}).then(function(res) {
					console.log(res);
				});
			}
		},
		components: {
			add
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.write
		margin: 0 auto
		width: 990px
		min-height: 560px
		background: #fff
		.table-wrapper
			margin: 0 auto
			width: 920px
			.write-edit
				width: 920px
				td
					padding: 10px 0
					.title
						font-weight: 700
						font-size: 16px
					.titleInput
						border-top: none
						border-left: none
						border-right: none
					.desc
						width: 840px
						height: 120px
</style>