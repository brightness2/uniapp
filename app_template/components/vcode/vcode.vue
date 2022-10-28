<template>
	<view>
		<u-toast ref="vcodeToast"></u-toast>
		<u-code :seconds="secode" @end="codeEnd" @start="codeStart" ref="uCode" 
		@change="codeChange"></u-code>
		<u-button :color="color" :disabled="btnDisable" @tap="getCode" :size="size">{{tips}}</u-button>
	</view>
</template>

<script>
	export default {
		name:"vcode",
		props:{
			secode:{
				type:Number,
				default:20
			},
			text:{
				type:String,
				default:'获取验证码'
			},
			size:{
				type:String,
				default:'mini'
			},
			color:{
				type:String,
				default:'#5ac725'
			}
		},
		data() {
			return {
				tips:this.$props.text,
				btnDisable:false,
			};
		},
		methods:{
			codeStart(){
				this.btnDisable = true
				// uni.$u.toast('倒计时开始');
			},
			codeEnd(){
				this.btnDisable = false
				// uni.$u.toast('倒计时结束');
			},
			codeChange(text){
				this.tips = text
			},
			getCode(){
				let that = this
				if(that.$refs.uCode.canGetCode){
					uni.showLoading({
						title: '正在获取验证码'
					})
					that.$request.post('test/getCode').then(res=>{
						uni.hideLoading();
						if(res.code == 1){
							// 这里此提示会被that.codeStart()方法中的提示覆盖
							uni.$u.toast('验证码是：'+ res.data);
							// 通知验证码组件内部开始倒计时
							that.$refs.uCode.start();
						}
						
					})
					
				}else {
					uni.$u.toast('倒计时结束后再发送');
				}
			}
		}
	}
</script>

<style>

</style>
