import { RouterMount,createRouter } from "uni-simple-router"
import {debug} from "@/config/route.js"
//ROUTES 是由uni-read-pages TransformPages 生成
const router = createRouter({
	platform:process.env.VUE_APP_PLATFORM,
	debugger:debug, 
	routes: [...ROUTES,
		{
		  path: '*',
		  redirect:(to)=>{
			  return {name:'404'}
		  }
		},
	],
	
})

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
    console.log('跳转结束')
})

export {
	router,
	RouterMount,
}