import Helper from '@/libs/function/helper.js'
import {routerIntercept,uniRouterIntercept} from '@/config/router.js'
const pages = [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
	{
		"path": "pages/index/index",
		"name":'index',
		"style": {
			"navigationBarTitleText": "uni-app"
		}
	}
	,{
		"path" : "pages/login/login",
		"name":"login",
		"style" :                                                                                    
		{
			"navigationBarTitleText": "",
			"enablePullDownRefresh": false
		}
		
	}
]
const Router = {
	init(){
		// console.log('router init');
		this.interceptor();
		this.addRouteIntercept();
	},
	/**
	 * 封装的拦截
	 */
	addRouteIntercept(){
		let that = this;
		uni.$tn.routeIntercept=(mergeConfig, resolve)=>{
			let res_bool = routerIntercept(mergeConfig);
			if(!res_bool){
				resolve(false);//不允许跳转
				return
			}
			console.log('路由 拦截');
			if(mergeConfig.name){
				mergeConfig.url = '/'+that.getPageByName(mergeConfig.name).path;
				mergeConfig.url = that.mixinParam(mergeConfig.url,mergeConfig.params);
			}
			resolve(true);//允许跳转
		}
	},
	//通过name获取pages path
	getPageByName(name){
		let page =  pages.filter(function(curr,index,arr){
			return curr.name == name;
		})[0];
		
		if(page){
			return page;
		}else{
			return {path:'pages/404/404'};
		}
		
	},
	getPageByUrl(url){
		let page =  pages.filter(function(curr,index,arr){
			return ('/'+curr.url) == url;
		})[0];
		
		if(page){
			return page;
		}else{
			return false;
		}
		
	},
	// 整合路由参数
	mixinParam(url, params) {
		
	    // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
	    // 如果有url中有get参数，转换后无需带上"?"
	    let query = ''
	    if (/.*\/.*\?.*=.*/.test(url)) {
	        // object对象转为get类型的参数
	        query = Helper.queryParams(params, false)
	        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
	        return url += `&${query}`
	    }
	    // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
	    query = Helper.queryParams(params)
	    return url += query
	},
	//uniapp自带的拦截
	interceptor(){
		
		let list = ['navigateBack'];
		
		list.forEach(item=>{
			//检测是否登录拦截
			uni.addInterceptor(item,{
				invoke(args) {
					// let isLogin = Utils.checkLogin(false);
					//  if(!isLogin){
					// 	 uni.$tn.route({name:'login'})
					//  }
					uniRouterIntercept(args)
				},
			})
		})
	}
}

module.exports = {
	Router
}