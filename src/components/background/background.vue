<template>
	<div class="background">
		<canvas ref="canvas" id="canvas"></canvas>
	</div>
</template>

<script type="text/ecmascript">
	const FOCALLENGTH = 250;
	let canvas = {};
	let context = {};
	let dots = [];
	export default{
		props: {
			userName : {
				type: String
			}
		},
		data() {
			return {
				derection: true,
				pause: false,
				loginText: false
			};
		},
		mounted() {
			this.getContext();
		},
		methods: {
			getContext() {
				// 初始化canvas画布
				// 获取屏幕宽高
				let w = window.innerWidth;
				let h = window.innerHeight;
				canvas = this.$refs.canvas;
				// 设置canvas的宽高
				canvas.width = w;
				canvas.height = h;
				context = canvas.getContext('2d');
				// 设置context中文字属性
				context.font = '200px 微软雅黑 bold';
				context.fillStyle = 'rgba(168, 168, 168, 1)';
				// 文字垂直居中
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				// 在画布上绘制文字
				this.drawText('Blog');
			},
			drawText(text) {
				dots = [];
				context.fillText(text, canvas.width /2, canvas.height / 2);
				// 将文字粒子化
				this.getimgData();
			},
			getimgData() {
				// 使用getImageData方法获取整块画布上的图片数据
				let img = context.getImageData(0, 0, canvas.width, canvas.height);
				// 把之前的文字清空
				context.clearRect(0, 0, canvas.width, canvas.height);
				// 遍历每个像素，如果按照像素取，有效值会非常多所以每隔6个像素取一个值
				for (let x = 0; x < img.width; x += 6) {
					for (let y = 0; y < img.height; y += 6) {
						let i = (x + y * img.width) * 4;
						if (img.data[i] >= 128) {
							let dot = {
								// 储存文字位置
								dx: 0,
								dx: 0,
								dz: 0,
								// 储存粒子当前位置
								x: 0,
								y: 0,
								z: 0,
								// 存储粒子初始化随机位置
								tx: 0,
								ty: 0,
								tz: 0
							}
							dot.dx = x - 3;
							dot.dy = y - 3;
							dot.dz = 0;
							dot.x = x - 3;
							dot.y = y - 3;
							dot.z = 0;
							dots.push(dot);
						}
					}
				}
				// 初始化粒子，让粒子无序的存在于画板上
				this.initMove();
			},
			initMove() {
				for (let i = 0; i < dots.length; i++) {
					dots[i].x = Math.random() * canvas.width;
					dots[i].y = Math.random() * canvas.height;
					dots[i].z = Math.random() * FOCALLENGTH * 2 - FOCALLENGTH;
					dots[i].tx = Math.random() * canvas.width;
					dots[i].ty = Math.random() * canvas.height;
					dots[i].tz = Math.random() * FOCALLENGTH * 2 - FOCALLENGTH;
				}
				this.paintPoint(canvas, context, dots);
				let _this = this;
				if (!this.pause) {
					setInterval(function() {
						// 让粒子进行运动
						_this.move();
					}, 1000 / 60);
				}
			},
			move() {
				context.clearRect(0, 0, canvas.width, canvas.height);
				if (this.derection) {
					for (let i = 0; i < dots.length; i++) {
						// 判断位置点是否运动到文字点坐标dx，dy附近
						if (Math.abs(dots[i].dx - dots[i].x) < 0.001 && Math.abs(dots[i].dy - dots[i].y) < 0.001 && Math.abs(dots[i].dz - dots[i].z) < 0.001) {
							dots[i].x = dots[i].dx;
							dots[i].y = dots[i].dy;
							dots[i].z = dots[i].dz;
							this.derection = false;
						} else {
							dots[i].x = dots[i].x + (dots[i].dx - dots[i].x) * 0.1;
							dots[i].y = dots[i].y + (dots[i].dy - dots[i].y) * 0.1;
							dots[i].z = dots[i].z + (dots[i].dz - dots[i].z) * 0.1;
						}
					}
				} else if (!this.loginText){
					for (let i = 0; i < dots.length; i++) {
						if (Math.abs(dots[i].tx - dots[i].x) < 0.1 && Math.abs(dots[i].ty - dots[i].y) < 0.1 && Math.abs(dots[i].tz - dots[i].z) < 0.1) {
							dots[i].x = dots[i].tx;
							dots[i].y = dots[i].ty;
							dots[i].z = dots[i].tz;
							this.pause = true;
						} else {
							dots[i].x = dots[i].x + (dots[i].tx - dots[i].x) * 0.1;
							dots[i].y = dots[i].y + (dots[i].ty - dots[i].y) * 0.1;
							dots[i].z = dots[i].z + (dots[i].tz - dots[i].z) * 0.1;
							this.pause = false;
						}
					}
				}
				// 将粒子绘制在画板上
				this.paintPoint();
			},
			paintPoint() {
				for (let i = 0; i < dots.length; i++) {
					let scale = FOCALLENGTH / (FOCALLENGTH + dots[i].z);
					context.save();
					context.beginPath();
					context.fillStyle = "rgba(50, 50, 50, "+ scale +")";
					context.arc(canvas.width / 2 + (dots[i].x - canvas.width / 2) * scale, canvas.height / 2 + (dots[i].y - canvas.height / 2) * scale - 200, 3 * scale, 0, Math.PI * 2);
					context.fill();
					context.restore();
				}
			},
			changeText() {
				if (this.userName.length) {
					this.derection = true;
                  	this.pause = false;
                  	this.loginText = true;
                  	let text = '欢迎你' + ' ' + this.userName + '!';
                  	console.log(text);
                  	this.drawText(text);
				} else {
					console.log('null');
				}
			}
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.background
		z-index: 999
		background: #fff
		#canvas
			display: block
</style>