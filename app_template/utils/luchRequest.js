import Request from 'luch-request'
const {base_url} = require('../config/index.js')

const request = new Request({
	baseURL:base_url,
});

//后置拦截器
request.interceptors.response.use((response)=>{
	let data = response.data
	switch(response.statusCode){
		case 404:
			uni.showToast({
				// title:err.errMsg,
				title:'404 Not Find',
				icon:'error'
			})
		break;
		case 200:
			if(data.code != 1){
				uni.showToast({
					title:data.msg?data.msg:'请求失败',
					// title:'请求成功',
					icon:'error'
				})	
			}
			
		break;
		default:
			uni.showToast({
				title:data.msg?data.msg:'请求失败',
				icon:'error',
			})
		break;
	}
	
	return data
})

export default request