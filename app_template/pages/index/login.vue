<template>
	<view class="login uni-pl-4 uni-pr-4">
		<uni-forms ref="loginForm" :rules="dynamicRules" :model="loginFormData">
			<uni-forms-item label="账号" required name="account">
				<uni-easyinput v-model="loginFormData.account" placeholder="请输入账号" />
			</uni-forms-item>
			<uni-forms-item label="密码" required name="password">
				<uni-easyinput v-model="loginFormData.password" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		<view class="button-group">
			<button type="primary" size="default" @click="submit('loginForm')">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 数据源
				loginFormData: {
					account: '',
					password: ''
				},
				// 规则
				dynamicRules: {
					account: {
						rules: [{
							required: true,
							errorMessage: '账号不能为空'
						}]
					},
					password:{
						rules: [{
							required: true,
							errorMessage: '密码不能为空'
						}]
					}
				}
			}
		},
		methods: {
			// 提交
			submit(ref) {
				this.$refs[ref].validate((err,value)=>{
					if(!err){
						this.$request.post('login').then(res=>{
							if(res.ret === 200 && res.data.code === 0){
								this.$Router.push({
									name:'index',
									params:{user:res.data.result}
								})
							}else{
								uni.showToast({
									title:"请求出错",
									icon:'error'
								})
							}
						})
					}
				})
			},
		}
	}

</script>

<style scoped>
</style>
