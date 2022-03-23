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
app.$mount()
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
