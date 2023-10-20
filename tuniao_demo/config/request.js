import Store from "@/store"
module.exports = {
	config:{
		// // #ifdef H5
		// baseURL:process.env.NODE_ENV === 'development' ? '/api/backendapi':(Store.state.vuex_ipurl+'/backendapi'),
		// // #endif
		// // #ifdef APP-PLUS
		// baseURL:(Store.state.vuex_ipurl+'/backendapi'),
		// // #endif
	},
	
	//请求拦截器
	requestInterceptors(config){
		console.log('请求拦截');
		// uni.showLoading({
		// 	mask:true,
		// 	title:'加载中',
		// 	time:5000,
		// })
		// config.header = {
		// 	...config.header,
		// 	token:Store.state.vuex_user.token?Store.state.vuex_user.token:''
		// }
		// config.params.refresh_token = Store.state.vuex_refresh_token?Store.state.vuex_refresh_token:'';
		// config.params.time = (new Date).getTime();//增加时间参数，保证每次都是最新的
		return config;
	},
	//响应拦截
	responseInterceptors(response){
		console.log('响应拦截');
		// uni.hideLoading();
		let data = response.data;
		// if(data.code !== 1){
		// 	// #ifdef APP-PLUS
		// 	plus.nativeUI.toast(data.msg,{verticalAlign:"center",duration:"long"});
		// 	// #endif
		// 	// #ifndef APP-PLUS
		// 	uni.showToast({
		// 		title:data.msg,
		// 		icon:'error'
		// 	})
		// 	//#endif
		// 	return null;
		// }
		// //存在refresh_token 就缓存最新的token
		// if(data?.user?.refresh_token){
		// 	uni.$tn.vuex('vuex_user',data.user);
		// 	uni.$tn.vuex('vuex_refresh_token',data.user.refresh_token);
		// }
		return data;
	},
	// 响应错误处理，不设置注释即可
	responseError(response){
		// let data = response.data;
		
		//  if(data?.msg){
		// 	 // #ifdef APP-PLUS
		// 	 plus.nativeUI.toast(data.msg,{verticalAlign:"center",duration:"long"});
		// 	 // #endif
		// 	 // #ifndef APP-PLUS
		// 	 uni.showToast({
		// 	 	title:data.msg,
		// 	 	icon:'error'
		// 	 })
		// 	 // #endif
			 
		//  }else{
		// 	 uni.showToast({
		// 	 	title:'请求出错',
		// 		icon:'error'
		// 	 })
		//  }
		 
		//  if(data){
		// 	switch (data.code){
		// 		case 401:
		// 			uni.$tn.vuex('vuex_user',{});
		// 			uni.$tn.route({name:'login'})
		// 			break;
		// 		default:
				
		// 			break;
		// 	}
		//  }
		 
	},
	//切换ipUrl
	// changeipUrl(url){
	// 	if(typeof url != 'string'){
	// 		return false;
	// 	}
	// 	let that = this;
	// 	uni.$tn.vuex('vuex_ipurl',url);
	// 	uni.$tn.http.setConfig((config)=>{
	// 		config.baseURL = that.getBaseUrl(url) ;
	// 		return config;
	// 	})
	// 	return true;
		
	// },
	//拼接baseUrl
	/**
	 * @param {Object} url
	 */
	getBaseUrl(url){
		return url + '/backendapi';
	}
}