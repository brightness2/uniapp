<template>
	<view>
		<view class="uni-pa-8 bg-white" >
			<view class="uni-mb-4">
				<u--text text="用户列表" size="26" color="#000"></u--text>
			</view>
			<view class="uni-pt-6">
				<u--text margin="20" text="包含用户信息的列表,带有常规操作" type="info" size="14"></u--text>
			</view>
		</view>
		
		<view class="uni-pa-8">
			<view v-for="(user,index) in userlist" :key="index" class="bg-white uni-pa-8 uni-mb-4">
				<u-row class="uni-mb-8">
					<u-avatar  class="uni-mr-8"></u-avatar>
					<u--text :text="user.name" color="#333"></u--text>
				</u-row>
				<view class="info">
					<view>ID: {{user.id}}</view>
					<view>邮箱地址：{{user.email}}</view>
					<u-row class="uni-pt-4">
						<u-tag v-if="user.tags.email" class="uni-mr-4" type="success" text="已验证邮箱" plain></u-tag>
						<u-tag v-else class="uni-mr-4" type="info" text="待验证邮箱" plain></u-tag>
						<u-tag v-if="user.tags.normal" class="uni-mr-4" borderColor="#9c27b0" color="#9c27b0" text="普通用户" plain></u-tag>
					</u-row>
					<view>
						
					</view>
					<u-row class="uni-pt-4">
						<u-tag v-for="(role,roleIndex) in user.roles" :key="roleIndex" class="uni-mr-4" type="primary" :text="role" ></u-tag>
					</u-row>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import userApi from '@/api/user.js' 
	export default {
		data() {
			return {
				userlist:[
					
					{
						id:100675,
						name:'Brightness',
						avatar:'',
						email:'123456@qq.com',
						tags:{
							email:true,
							normal:true,
						},
						roles:['管理员','测试人员'],
						
					}
				]
			}
		},
		methods: {
			
		},
		onReady() {
			let that = this
			userApi.getList().then(res=>{
				if(res.code==1){
					that.userlist=[
						...that.userlist,
						...res.data.list,
					]
				}
			}).catch(err=>{
				uni.$u.toast('用户数据请求失败')
			})
		}
	}
</script>

<style lang="scss" scoped>
	.bg-white{
		background-color: #fff;
	}
</style>
