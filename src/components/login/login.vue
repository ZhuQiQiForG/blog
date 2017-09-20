<template>
	<div class="login" v-show="showLogin">
		<div class="left-content">
			<div class="logo-wrapper">logo</div>
			<div class="line"></div>
			<div class="login-wrapper">
				<label for="userName">用户名</label>
				<input type="" name="" id="userName">
			</div>
			<div class="login-wrapper">
				<label for="passWord">密码</label>
				<input type="" name="" id="passWord">	
			</div>
			<div class="login-button">
				<button @click="loging">登录</button>
				<button>注册</button>
			</div>
		</div>
		<div class="right-content"></div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				showLogin: true
			};
		},
		methods: {
			loging() {
				this.showLogin = false;
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.login
		display: flex
		position: fixed
		top: 0
		bottom: 0
		left: 0
		right: 0
		background: #dedede
		.left-content
			flex: 0 0 325px
			width: 325px
			height: 100%
			border-right: 1px solid #333
			.logo-wrapper
				margin: 25px auto 0 auto
				width: 285px
				height: 176px
				background: #fff
			.line
				margin: 15px auto
				width: 95%
				border-bottom: 2px solid #333
</style>