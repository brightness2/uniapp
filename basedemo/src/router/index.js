import { RouterMount,createRouter } from "uni-simple-router"
import routerConfig from "@/config/route.js"
const router = createRouter(routerConfig)

//全局路由前置守卫
router.beforeEach(routerConfig.beforeEach)
// 全局路由后置守卫
router.afterEach(routerConfig.afterEach)

export {
	router,
	RouterMount,
}