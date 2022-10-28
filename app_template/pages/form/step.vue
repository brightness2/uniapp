<template>
	<view class="step-form uni-pa-8">
		<u-steps :current="stepIndex"  direction="column">
			<u-steps-item title="添加转账信息" >
				<template slot="desc" >
					<u--form
						labelWidth="auto"
						labelPosition="top"
						:model="accountModel"
						ref="accountForm"
						v-show="stepIndex == 0"
					>
						<u-form-item
								label="付款账号"
								prop="fromAccount"
								borderBottom
						>
							<u--input
									v-model="accountModel.fromAccount"
									border="none"
									placeholder="付款账号"
							></u--input>
						</u-form-item>
						<u-form-item
								label="收款账号"
								prop="toAccount"
								borderBottom
						>
							<u--input
									v-model="accountModel.toAccount"
									border="none"
									placeholder="收款账号"
							></u--input>
						</u-form-item>
						<u-form-item
								label="转账金额"
								prop="amount"
								borderBottom
						>
							<u--input
								type="number"
								v-model="accountModel.amount"
								border="none"
								placeholder="转账金额"
							></u--input>
						</u-form-item>
						<u-row class="uni-mt-8" justify="start">
							<u-col span="1">
								<u-button @click="accountSubmit" style="width: 80rpx;" text="下一步" type="primary" size="mini"></u-button>
							</u-col>
						</u-row>
					</u--form>
					
				</template>
			</u-steps-item>
			<u-steps-item class="con" title="确认转账信息" >
				<template slot="desc" >
					<u--form
						labelWidth="auto"
						labelPosition="top"
						:model="confirmModel"
						ref="confirmForm"
						v-show="stepIndex == 1"
					>
						<u-form-item
								label="付款账号"
								borderBottom
						>
							<u--text :text="accountModel.fromAccount"></u--text>
							
						</u-form-item>
						<u-form-item
								label="收款账号"
								borderBottom
						>
							<u--text :text="accountModel.toAccount"></u--text>
							
						</u-form-item>
						<u-form-item
								label="转账金额"
								borderBottom
						>
							<u--text :text="accountModel.amount"></u--text>
							
						</u-form-item>
						<u-form-item
								label="支付密码"
								prop="password"
								borderBottom
						>
							<u--input
								type="password"
								v-model="confirmModel.password"
								border="none"
								placeholder="支付密码"
							></u--input>
							
						</u-form-item>
						<u-row class="uni-mt-8" justify="start">
							<u-col span="3">
								<u-button @click="comfirmSubmit" :disabled="stepIndex!=1" style="width: 80rpx;" text="提交" type="primary" size="mini"></u-button>
							</u-col>
							<u-col span="1">
								<u-button @click="stepIndex--" style="width: 80rpx;" text="上一步" plain type="primary" size="mini"></u-button>
							</u-col>
						</u-row>
					</u--form>
					
				</template>
			</u-steps-item>
			<u-steps-item title="完成" >
				
			</u-steps-item>
		</u-steps>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				stepIndex:0,
				accountModel:{
					fromAccount:'',
					toAccount:'',
					amount:'',
				},
				confirmModel:{
					password:'',
				},
				accountRules:{
					fromAccount:{
						type: 'string',
						required: true,
						message: '请输入付款账号',
						trigger: ['blur', 'change']
					},
					toAccount:{
						type: 'string',
						required: true,
						message: '请输入收款账号',
						trigger: ['blur', 'change']
					},
					amount:{
						type: 'number',
						required: true,
						message: '请输入转账金额',
						trigger: ['blur', 'change']
					}
				},
				confirmRules:{
					password:{
						type:'string',
						required: true,
						message: '请输入支付密码',
						trigger: ['blur', 'change']
					}
				}
			}
		},
		methods: {
			accountSubmit(){
				let that = this
				that.$refs.accountForm.validate().then(res=>{
					if(res){
						that.stepIndex++
					}
				}).catch(err=>{
					
				})
			},
			comfirmSubmit(){
				let that = this
				that.$refs.confirmForm.validate().then(res=>{
					if(res){
						that.confirmModel.password = ''
						that.stepIndex = 3
					}
				}).catch(err=>{
					
				})
				
			},
		},
		onReady() {
			this.$refs.accountForm.setRules(this.accountRules)
			this.$refs.confirmForm.setRules(this.confirmRules)
			
		},
	}
</script>

<style lang="scss" scoped>
	.step-form{
		background-color: #fff;
	}
	
	.u-steps-item__line{
		background-color: red;
	}
</style>
