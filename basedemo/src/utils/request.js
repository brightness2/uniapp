
const {base_url} = require('@/config/index.js')

class Request {
	static BaseUrl = base_url
	constructor(arg) {
		// this.init()
	}
	init(){
		
	}
	request(obj){
		
		return new Promise((resolve,reject)=>{
			obj.url = Request.BaseUrl + obj.url
			obj.success = (res)=>{
				
				switch(res.statusCode){
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
				res.statusCode === 200 ? resolve(res.data) : resolve(null)
				// resolve(res)
			}
			obj.fail = (err)=>{
				// reject(err)
				uni.showToast({
					// title:err.errMsg,
					title:'请求出错',
					icon:'error'
				})
			}
			// obj.complete = (res)=>{
			// 	resolve(res)
			// }
			try{
				uni.request(obj)
			}catch(err){
				// reject(err)
				uni.showToast({
					title:'请求出错'
				})
				resolve(null)
			}
		
			
		})
	}
	get(obj){
		obj.method = 'GET';
		return this.request(obj)
		
	}
	post(obj){
		obj.method = 'POST';
		return this.request(obj)
	}
	
	uploadFile(obj){
		return  new Promise((resolve,reject)=>{
			obj.url = Request.BaseUrl + obj.url
			obj.success = (res)=>{
				obj.success&&obj.success()
				resolve(res)
			}
			obj.fail = (err)=>{
				obj.fail&&obj.fail()
				reject(err)
			}
			let uploadTask = uni.uploadFile(obj)
		})
	}
}

export default Request;