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
				<button @click="register">注册</button>
			</div>
		</div>
		<div class="right-content"></div>
		<div class="reg-wrapper" v-show="reging">
			<h1 class="title">注册用户</h1>
			<table>
				<tr>
					<td>
						<label for="reguserName">用户名</label>
					</td>
					<td>
						<input type="" name="" id="reguserName" placeholder="请输入用户名" v-model="reguserName">
					</td>
				</tr>
				<tr>
					<td>
						<label for="regpassword">密码</label>
					</td>
					<td>
						<input type="" name="" id="regpassword" placeholder="请输入密码" v-model="regpassword">
					</td>
				</tr>
				<tr>
					<td>
						<label for="regrepassword">确认密码</label>
					</td>
					<td>
						<input type="" name="" id="regrepassword" placeholder="请再次输入密码" v-model="regrepassword">
					</td>
				</tr>
			</table>
			<div class="regButton">
				<button @click="reg">注册</button>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				showLogin: true,
				reging: false,
				reguserName: '',
				regpassword: '',
				regrepassword: ''
			};
		},
		methods: {
			loging() {
				this.showLogin = false;
			},
			register() {
				this.reging = true;
			},
			reg() {
				let userName = this.reguserName;
				let password = this.regpassword;
				let repassword = this.regrepassword;
				this.$http.post('/api/login/createAccount', {
					userName: userName,
					password: password,
					repassword: repassword
				}).then(function (res) {
					console.log(res);
				});
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
		.reg-wrapper
			position: fixed
			left: 50%
			top: 50%
			margin-left: -177px
			margin-top: -219px
			width: 354px
			height: 438px
			background: #fff
</style>