
// #ifndef VUE3
import Vue from 'vue'
// 注意必须在Vue后面引入，否则报错uView
import uView from "uview-ui";
Vue.use(uView);
import App from './App'
import {router,RouterMount} from 'route/index.js'
import request from './utils/luchRequest.js'
import tools from './utils/tools.js'

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$tools = tools

App.mpType = 'app'
Vue.use(router)
const app = new Vue({
    ...App
})
// #endif

//uni-simple-router v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
