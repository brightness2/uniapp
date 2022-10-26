import request from "@/utils/luchRequest.js"
const userApi = {
	async login(account,password){
		let res = await request.post('test/login',{
			account,
			password,
		});
		return res;
	}
}

export default userApi