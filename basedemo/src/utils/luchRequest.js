import Request from 'luch-request'
const {base_url} = require('@/config/index.js')

const http = new Request({
	baseURL:base_url,
});

//后置拦截器
http.interceptors.response.use((response)=>{
	switch(response.statusCode){
		case 404:
			uni.showToast({
				// title:err.errMsg,
				title:'404 Not Find',
				icon:'error'
			})
		break;
		default:
			uni.showToast({
				// title:err.errMsg,
				title:'请求成功',
				icon:'sucess'
			})
		break;
	}
	
	return response
})

export default http