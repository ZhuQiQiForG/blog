<template>
	<div>
		<div class="login" v-show="showLogin">
			<div class="login-wrapper">
				<table class="login-table">
					<tr>
						<td class="leftTd">
							<label for="userName">账号</label>
						</td>
						<td class="rightTd">
							<input type="" name="" id="userName" v-model="userName" ref="userNameInput" @blur="changeText">
						</td>
					<tr>
					<tr>
						<td class="leftTd">
							<label for="passWord">密码</label>
						</td>
						<td class="rightTd">
							<input type="password" name="" id="passWord" v-model="password">
						</td>
					</tr>
				</table>
				<div class="login-button">
					<button @click="loging">登录</button>
					<button @click="register">注册</button>
				</div>
			</div>
			<div class="reg-wrapper" v-show="reging">
				<i class="icon-close" @click="removeReg"></i>
				<h1 class="title">注册用户</h1>
				<table class="reg-table">
					<tr>
						<td class="leftTd">
							<label for="reguserName"><span class="star">*</span>用户名</label>
						</td>
						<td class="rightTd">
							<input type="" name="" id="reguserName" placeholder="请输入用户名" v-model="reguserName">
						</td>
					</tr>
					<tr>
						<td class="leftTd">
							<label for="regpassword"><span class="star">*</span>密码</label>
						</td>
						<td class="rightTd">
							<input type="password" name="" id="regpassword" placeholder="请输入密码" v-model="regpassword">
						</td>
					</tr>
					<tr>
						<td class="leftTd">
							<label for="regrepassword"><span class="star">*</span>确认密码</label>
						</td>
						<td class="rightTd">
							<input type="password" name="" id="regrepassword" placeholder="请再次输入密码" v-model="regrepassword">
						</td>
					</tr>
					<tr>
						<td class="leftTd">
							<label for="regphone">手机号</label>
						</td>
						<td class="rightTd">
							<input type="" name="" id="regphone" placeholder="请输入手机号" v-model="regphone">
						</td>
					</tr>
					<tr>
						<td class="leftTd">
							<label for="reggithub">github</label>
						</td>
						<td class="rightTd">
							<input type="" name="" id="reggithub" placeholder="请输入github" v-model="reggithub">
						</td>
					</tr>
					<tr>
						<td class="leftTd">
							<label for="regmail">邮箱</label>
						</td>
						<td class="rightTd">
							<input type="" name="" id="regmail" placeholder="请输入邮箱" v-model="regmail">
						</td>
					</tr>
				</table>
				<div class="regButton">
					<button @click="reg">注册</button>
				</div>
			</div>
		</div>
		<background :userName="this.userName" ref="background"></background>
	</div>
</template>

<script type="text/ecmascript-6">
	import background from 'components/background/background';

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
		created() {
			this.$nextTick(() => {
				this.$refs.userNameInput.focus();
			});
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
			},
			removeReg() {
				this.reging = false;
			},
			changeText() {
				this.$refs.background.changeText();
			}
		},
		components: {
			background
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.login
		position: fixed
		top: 0
		bottom: 0
		left: 0
		right: 0
		.login-wrapper
			margin: 500px auto 0 auto
			width: 420px
			text-align: center
			.login-table
				width: 100%
				td
					padding-bottom: 20px
				.leftTd
					width: 20%
					text-align: right
					font-size: 0
					vertical-align: middle
					label
						font-size: 22px
						font-weight: 700
				.rightTd
					padding-left: 20px
					text-align: left
					input
						display: block
						margin: 0
						font-size: 18px
						border-top: none
						border-left: none
						border-right: none
						border-bottom: 1px solid #333
						width: 250px
						height: 30px
						line-height: 30px
						&:focus
							outline: none
			.login-button
				width: 100%
				button
					display: inline-block
					margin: 20px
					width: 80px
					height: 36px
					background: #fff
					border-radius: 10px
					box-shadow: 2px 2px 6px #333
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
		padding: 20px
		box-sizing: border-box
		width: 354px
		height: 438px
		border: 2px solid #333
		border-radius: 15px
		text-align: center
		background: #fff
		.icon-close
			position: absolute
			display: block
			right: 25px
			top: 20px
			font-size: 20px
		.title
			font-size: 22px
			font-weight: 700
			margin-bottom: 20px
		.reg-table
			width: 100%
			tr
				height: 37px
				line-height: 37px
				.leftTd
					width: 30%
					text-align: right
					.star
						display: inline-block
						margin-right: 5px
						color: red
				.rightTd
					input
						display: block
						margin: 0 0 0 10px
						padding-left: 4px
						border-top: none
						border-left: none
						border-right: none
						border-bottom: 1px solid #333
						width: 190px
						height: 16px
						line-height: 16px
						&:focus
							outline: none
		.regButton
			button
				display: block
				margin: 40px auto
				width: 80px
				height: 32px
				background: #fff
				border: 1px solid #ccc
				box-shadow: 1px 1px 3px #292929
</style>