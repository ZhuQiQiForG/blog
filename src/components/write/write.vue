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
						<add :userName="this.userName" @change-ArticleTypeContent="changeArticleTypeContent"></add>
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
						<div class="editor-wrapper" >
							<quill-editor v-model="articleText" :options="editorOption"></quill-editor>
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
				articleTypeContent: [],
				editorOption: {}
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
				let _this = this;
				this.time = nowDate();
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
					if (res.data === '提交成功') {
						// 重定向到个人主页首页
						_this.$router.push({path: '/index', query: {userName: _this.userName}});
					}
				});
			},
			changeArticleTypeContent(val) {
				this.articleTypeContent = val;
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
						box-sizing: border-box
						border: 1px solid #ccc
					.editor-wrapper
						.quill-editor
							width: 840px
							height: 745px
							.ql-container
								height: 680px
</style>