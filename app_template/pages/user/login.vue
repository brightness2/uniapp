<template>
	<view class="login">
		<u-toast ref="uToast"></u-toast>
		<!-- <u-loading-page loading-text="登录中..." bg-color="#fff"  :loading="submitLoading"></u-loading-page> -->
<u-line-progress v-show="submitPercentage" :percentage="submitPercentage" activeColor="#2b85e4" :showText="false" height="2"></u-line-progress>
		<view class="uni-pt-12">
			<u-row type="flex" justify="center">
				<u-col span="2"><image src="../../static/logo.png" mode="" style="width: 80rpx;height: 80rpx;"></image></u-col>
				<u-col span="6"><u--text text="Hoeron" size="40"></u--text></u-col>
			</u-row>
		<!-- 	<u-row type="flex" justify="center" style="width: 100%;">
				<u-col style="width: 100%;text-align: center;">
					<u--text text="Hoeron uniapp demo" color="#808695" ></u--text>
				</u-col>
			</u-row> -->
			<view style="display: flex; justify-content: center;">
				<u--text text="Hoeron uniapp demo" color="#808695" align="center"></u--text>
			</view>
			<u-row>
				<u-col>
					  <u-tabs :list="tablist"  :lineWidth="80" :activeStyle="{ color: '#2979ff'}" @change="tabsChange" ></u-tabs>
					  <view v-show="tabsActiveIdx == 0" class="uni-pa-8">
					  	<u--form
							labelPosition="left"
							:model="accountModel"
							ref="formAccount"
						>
							<u-form-item
									label="账号"
									prop="userInfo.account"
									borderBottom
							>
									<u--input
										v-model="accountModel.userInfo.account"
										border="none"
										placeholder="请填写账号"
									></u--input>
							</u-form-item>
							<u-form-item
								label="密码"
								prop="userInfo.password"
								borderBottom
							>
								<u--input
									type="password"
									v-model="accountModel.userInfo.password"
									border="none"
									placeholder="请填写密码"
								></u--input>
							</u-form-item>
						</u--form>
						
					  </view>
					  <view v-show="tabsActiveIdx == 1" class="uni-pa-8">
					  	<u--form
							labelPosition="left"
							:model="mobileModel"
							ref="formMobile"
						>
							<u-form-item
									label="手机"
									prop="userInfo.mobile"
									borderBottom
							>
									<u--input
										v-model="mobileModel.userInfo.mobile"
										border="none"
										placeholder="请填写手机号"
									></u--input>
							</u-form-item>
							<u-form-item
								label="密码"
								prop="userInfo.password"
								borderBottom
							>
								<u--input
									type="password"
									v-model="mobileModel.userInfo.password"
									border="none"
									placeholder="请填写密码"
								></u--input>
							</u-form-item>
						</u--form>
						
					  </view>
				</u-col>
			</u-row>
			<u-row type="flex" justify="space-around" class="uni-pt-6">
				<u-col span="8">
					<u-form>
						<u-form-item>
							<u-checkbox-group>
								<u-checkbox
									label="自动登录"
									name="autoSignIn"
									:checked="autoSignIn"
								>
								</u-checkbox>
							</u-checkbox-group>
						</u-form-item>
					</u-form>
					
				</u-col>
				<u-col span="2">
					<u--text type="primary" text="忘记密码"></u--text>
				</u-col>
			</u-row>
			<u-row class="uni-pa-4">
				<u-col>
					<u-button type="primary" text="登录" @click="submit"></u-button>
				</u-col>
			</u-row>
			<u-row type="flex" justify="space-around" class="uni-pt-6">
				<u-col span="8">
					<u-row>
						<u-col span="5">
							<u--text text="其它登录方式" size="14"></u--text>
						</u-col>
						<u-col span="2">
							<u-icon name="weixin-circle-fill" size="22"></u-icon>
						</u-col>
						<u-col span="2">
							<u-icon name="qq-fill" size="22"></u-icon>
						</u-col>
					</u-row>
						
				</u-col>
				<u-col span="2">
					<u--text type="primary" text="注册用户"></u--text>
				</u-col>
			</u-row>
		</view>
		<view class="footer">
			<u--text type="info" align="center" text="Copyright@2022 Hoeron 技术部出品"></u--text>
		</view>
	</view>
</template>

<script>
	import userApi from '@/api/user.js'
	export default {
		data() {
			return {
				tabsActiveIdx:0,
				tablist:[
					{
						name: '用户密码登录',
					},
					{
						name:'手机号码登录'
					}
				],
				accountModel:{
					userInfo: {
						account: 'admin',
						password: '123456',
					},
				},
				accountRules:{
					'userInfo.account': {
						type: 'string',
						required: true,
						message: '请填写账号',
						trigger: ['blur', 'change']
					},
					'userInfo.password': {
						type: 'string',
						required: true,
						message: '请填写密码',
						trigger: ['blur', 'change']
					},
				},
				mobileModel:{
					userInfo: {
						mobile: '',
						password: '',
					},
				},
				mobileRules:{
					'userInfo.mobile':[
						{
							type: 'string',
							required: true,
							message: '请填写手机号',
							trigger: ['blur', 'change']
						},
						{
							// 自定义验证函数
							validator: (rule, value, callback) => {
								// 返回true表示校验通过，返回false表示不通过
								// uni.$u.test.mobile()就是返回true或者false的
								return uni.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change
							trigger: ['change','blur'],
						}
					],
					'userInfo.password': {
						type: 'string',
						required: true,
						message: '请填写密码',
						trigger: ['blur', 'change']
					},
				},
				autoSignIn:true,
				submitLoading:false,
				submitPercentage:0,
				timer:null,
			}
		},
		methods: {
			tabsChange(item){
				//清空表单校验错误信息
				// this.$refs.formAccount&&this.$refs.formAccount.resetFields()
				// this.$refs.formMobile&&this.$refs.formMobile.resetFields()
				this.tabsActiveIdx = item.index
				
			},
			submit(){
				let that = this
				
				if(that.tabsActiveIdx == 0){
					that.$refs.formAccount.validate().then(res=>{
						that.doLoading(true);
						userApi.login(that.accountModel.userInfo.account,that.accountModel.userInfo.password).then(res=>{
							that.doLoading(false);
							if(res.code == 1){
								that.$Router.push({name:'Home'})
							}
						});
					}).catch(err=>{
						this.$refs.uToast.show({
							type: 'error',
							icon: true,
							message:'请检查登录信息'
						})
					})
				}else{
					that.$refs.formMobile.validate().then(res=>{
						uni.showToast({
							title:"待开发"
						})
					}).catch(err=>{
						this.$refs.uToast.show({
							type: 'error',
							icon: true,
							message:'请检查登录信息'
						})
					})
				}
			},
			doLoading(bool){
				let that = this
				
				if(bool){
					that.timer = setInterval(()=>{
						// that.submitLoading = false
						that.submitPercentage += 1
						if(that.submitPercentage >=100){
							that.submitPercentage = 0
							clearInterval(that.timer)
						}
					},100)
				}else{
					that.submitPercentage = 0
					clearInterval(that.timer)	
				}
				
			}
		},
		onReady() {
			this.$refs.formAccount.setRules(this.accountRules)
			this.$refs.formMobile.setRules(this.mobileRules)
		},
	}

</script>

<style lang="scss" scoped>
	.footer{
		width: 100%;
		position: fixed;
		bottom: 0;
	}
</style>
