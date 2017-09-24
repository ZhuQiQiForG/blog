// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import VueRouter from 'vue-router';
import login from 'components/login/login';
import index from 'components/index/index';

Vue.prototype.$http = axios;
Vue.use(VueRouter);
Vue.config.productionTip = false;
// 定义路由
const routes = [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		component: login
	},
	{
		path: '/index',
		component: index
	}
];

const router = new VueRouter({
	linkActiveClass: 'active',
	routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
