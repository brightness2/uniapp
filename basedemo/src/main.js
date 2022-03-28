import App from './App'
import store from './store'
// #ifndef VUE3
import Vue from 'vue'
import {router,RouterMount} from '@/router/index.js'
// console.log(process.env.VUE_APP_PLATFORM);
// const config = require('./config/index.js')
// console.log(config);
// console.log(process.env.NODE_ENV)
// console.log(ROUTES);
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$adpid = "1111111111"
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.use(router)
App.mpType = 'app'

/**Brightness*/
// import myRequest from './utils/request.js'
// Vue.prototype.$Request = (new myRequest)
/*Brightness*/

const app = new Vue({
	store,
	...App
})
//uni-simple-router v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount() //为了兼容小程序及app端必须这样写才有效果
// #endif
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.config.globalProperties.$adpid = "1111111111"
	app.config.globalProperties.$backgroundAudioData = {
		playing: false,
		playTime: 0,
		formatedPlayTime: '00:00:00'
	}
	return {
		app
	}
}
// #endif
