<template>
	<div class="login" v-show="showLogin">
		<div class="left-content">
			<div class="logo-wrapper">logo</div>
			<div class="line"></div>
			<div class="login-wrapper">
				<label for="userName">用户名</label>
				<input type="" name="" id="userName" v-model="userName">
			</div>
			<div class="login-wrapper">
				<label for="passWord">密码</label>
				<input type="" name="" id="passWord" v-model="password">	
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
				<tr>
					<td>
						<label for="regphone">手机号</label>
					</td>
					<td>
						<input type="" name="" id="regphone" placeholder="请输入手机号" v-model="regphone">
					</td>
				</tr>
				<tr>
					<td>
						<label for="reggithub">github</label>
					</td>
					<td>
						<input type="" name="" id="reggithub" placeholder="请输入github" v-model="reggithub">
					</td>
				</tr>
				<tr>
					<td>
						<label for="regmail">邮箱</label>
					</td>
					<td>
						<input type="" name="" id="regmail" placeholder="请输入邮箱" v-model="regmail">
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
				userName: '',
				password: '',
				reguserName: '',
				regpassword: '',
				regrepassword: '',
				regphone: '',
				reggithub: '',
				regmail: ''
			};
		},
		methods: {
			loging() {
				let userName = this.userName;
				let password = this.password;
				let _this = this;
				this.$http.post('/api/login/login', {
					userName: userName,
					password: password
				}).then(function (res) {
					if (res.data === 'successed') {
						_this.$router.push({path: '/index', query: {userName: userName}});
					} else {
						alert(res.data);
					}
				});
			},
			register() {
				this.reging = !this.reging;
			},
			reg() {
				let userName = this.reguserName;
				let password = this.regpassword;
				let repassword = this.regrepassword;
				let phone = this.regphone;
				let github = this.reggithub;
				let mail = this.regmail;
				let _this = this;
				this.$http.post('/api/login/createAccount', {
					userName: userName,
					password: password,
					repassword: repassword,
					phone: phone,
					github: github,
					mail: mail
				}).then(function (res) {
					alert(res.data);
					if (res.data === '账号创建成功') {
						_this.register();
					}
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