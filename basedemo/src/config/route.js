const beforeEach = (to,from,next)=>{
	console.log('跳转开始');
	next()
}
const afterEach = (to,from)=>{
	console.log('跳转结束');
}
//ROUTES 是由uni-read-pages TransformPages 生成，配置在vue.config.js
const routeConfig = {
	platform:process.env.VUE_APP_PLATFORM,
	debugger:true, 
	routes: [...ROUTES,
		{
		  path: '*',
		  redirect:(to)=>{
			  return {name:'404'}
		  }
		},
	],
	beforeEach,
	afterEach
}

export default routeConfig