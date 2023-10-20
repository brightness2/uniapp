import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui'
// 引入store
import store from './store'
//引入路由封装
import route from '@/libs/function/route.js'

import {Router} from '@/router'
import Request from '@/request'

Vue.use(TuniaoUI)

uni.$tn.route = route

Vue.config.productionTip = false

// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$tn.mixin.js')
Vue.mixin(vuexStore)

App.mpType = 'app'
const app = new Vue({
	store,
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif



Router.init()
Request.init(app)