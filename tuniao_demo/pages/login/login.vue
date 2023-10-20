<template>
	<view class="login-page">
		<view class="logo tn-flex tn-flex-row-center">
			<img src="/static/logo.png" alt="" srcset="">
		</view>
		<view class="tn-text-center tn-text-sm tn-color-gray tn-padding-sm">让今天更有效率</view>
		<view class="tn-text-center tn-text-xl">
			Hello,登录账号进入昊维
		</view>
		<view class="login-form tn-padding-lg">
			<tn-form :model="form" ref="form" :errorType="['message']">
				<tn-form-item label="" prop="account">
					<text class="tn-icon-my tn-text-xl tn-padding-right-sm"></text>
					<tn-input v-model="form.account" placeholder="请输入账号"/>
				</tn-form-item>
				<tn-form-item label="" prop="password">
					<text class="tn-icon-lock tn-text-xl tn-padding-right-sm"></text>
					<tn-input type="password" v-model="form.password" placeholder="请输入密码"/>
				</tn-form-item>
			</tn-form>
			<tn-button :disabled="loading" :loading="loading" size="lg" width="100%" margin="50rpx 0 12rpx 0" :shadow="true" backgroundColor="tn-bg-blue" fontColor="tn-color-white" @click="submit">
				<text class="tn-icon-login tn-margin-sm tn-text-xl"></text>
				<text>登录</text>
			</tn-button>
			<text class="tn-text-sm tn-text-center tn-color-gray">如没有账号，请联系管理员</text>
		</view>
		<view class="extends-box tn-flex tn-flex-row-center">
			<tn-button :plain="true" backgroundColor="tn-bg-blue" fontColor="tn-color-blue" @click="popup=true">高级设置</tn-button>
			<view class="api-url">
				<tn-popup v-model="popup" mode="bottom" length="30%">
				      <view class="tn-padding-sm">
						  <view class="tn-text-xl">
						  	高级设置
						  </view>
						  <tn-form-item label="当前接口:" :labelWidth="200">
							  <tn-input :value="curr_api_url"/>
						  </tn-form-item>
						   <tn-radio-group v-model="api_url" :wrap="true">
							<tn-radio  v-for="(item, index) in radioList" :key="index" :name="item.name">
							  {{item.name}}
							</tn-radio>
							<tn-radio :name="diy_radio_value">
								<tn-input v-model="diy_radio_value" placeholder="自定义接口"/>
							</tn-radio>
						  </tn-radio-group>
						  <tn-button backgroundColor="tn-bg-blue" fontColor="tn-color-white" @click="changeApiUrl">切换接口</tn-button>
					  </view>
				</tn-popup>
			</view>
		</view>
	</view>
</template>

<script>
	import Schema from '@/tuniao-ui/libs/utils/async-validator'
	export default {
		data() {
			return {
				loading:false,
				form:{
					account:'',
					password:'',
				},
				rules:{
					account:[
						{
							required:true,
							message:'账号不能为空',
							trigger:['change','blur'],
						}
					],
					password:[
						{
							required:true,
							message:'密码不能为空',
							trigger:['change','blur']
						}
					]
				},
				popup:false,
				api_url:"",
				curr_api_url:'',
				radioList:[
					{
						name:'http://www.baidu.com',
					},
					{
						name:'http://www.opsDev.com'
					},
				],
				diy_radio_value:'',
			}
		},
		methods: {
			submit(){
				let that = this
				if(!that.loading){
					that.$refs.form.validate(valid => {
						if(valid){
							that.loading = true
							console.log(that.form);
							uni.redirectTo({
								url:'/pages/index/index'
							})
							setTimeout(()=>{
								that.loading = false
							},5000)
						}
					})
				}
			},
			changeApiUrl(){
				let that = this
				let validator = new Schema({
					api_url:{required:true,type:'url'}
				})
				validator.validate({api_url:this.api_url}).then(()=>{
					that.curr_api_url = that.api_url
					that.popup = false
					that.onChangeApiUrl()
				}).catch(({errors,fields})=>{
					that.$tn.message.toast(errors[0].message)
				})
				
			},
			onChangeApiUrl(){
				
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		mounted() {
			this.curr_api_url = this.api_url
		}
	}
</script>

<style lang="scss" scoped>
	.login-page{
			padding-top:100rpx;
	}
</style>
