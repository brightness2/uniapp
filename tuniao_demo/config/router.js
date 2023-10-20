module.exports = {
	//uniapp 自带的拦截，先执行，返回键也可以触发
	uniRouterIntercept(args){
		console.log('uniapp route 拦截');
	},
	/**
	 * @param {Object} mergeConfig
	 * @return {bool} 返回true表示可以跳转 返回false表示不允许跳转
	 */
	routerIntercept(mergeConfig){
		//没有登录，跳转登录页面
		// let isLogin = Utils.checkLogin(false);
		// if(!isLogin&&mergeConfig.name!='login'){
		// 	uni.$u.route({name:'login'});
		// 	return false;
		// }
		// if(mergeConfig?.meta?.auth){
			
		// }
		console.log('route 拦截 config');
		return true;
	},
	
}