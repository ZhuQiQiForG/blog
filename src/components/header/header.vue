<template>
	<div class="header">
		<h1 class="title">{{this.userName}}的博客</h1>
		<span class="autograph"></span>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		props: {
			userName: {
				type: String
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.header
		width: 100%
		height: 100px
		line-height: 100px
		.title
			display: inline-block
			margin-left: 60px
			font-size: 48px
			font-weight: 700
			font-family: Verdana
		.autograph
			display: inline-block
			font-size: 22px
</style>