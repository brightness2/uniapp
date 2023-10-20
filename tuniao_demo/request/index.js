import { config,requestInterceptors,responseInterceptors,responseError } from "../config/request"
import Helper from '@/libs/function/helper.js'
module.exports =  {
	init(vm){
		// 初始化请求配置
		uni.$tn.http.setConfig((cfg) => {
			/* cfg 为默认全局配置*/
			return Helper.deepMerge(cfg,config);

		})
		// 请求拦截
		uni.$tn.http.interceptors.request.use(requestInterceptors);
		
		// 响应拦截
		uni.$tn.http.interceptors.response.use(responseInterceptors,responseError);
	}
}