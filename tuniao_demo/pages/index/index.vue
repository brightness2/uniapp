<template>
	<view class="content">
		<view class="top tn-bg-blue--light">
			<view class="tn-flex tn-flex-col-center tn-flex-row-between ">
				<text class="tn-text-xl tn-text-blod">昊维天下</text>
				<tn-button class="tn-bg-white">
					<text class="tn-icon-my-circle tn-text-xxl tn-color-blue"></text>
				</tn-button>
			</view> 
			<view class="search">
				<tn-input placeholder="搜索" v-model="search_key"  @confirm="doSearch"/>
			</view>
		</view>
		<view class="tn-padding-xl">
			<text class="tn-text-xl">最新任务</text>
		</view>
		<view class="task-list">
			<com-taskcard v-for="i in 4" title="任务标题" description="描述" date="2023-05-20"></com-taskcard>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search_key:'',
			}
		},
		onLoad() {
			
		},
		methods: {
			test(){
				uni.$tn.http.get('/api/api/demo/test').then(rs=>{
					console.log(rs);
				})	
			},
			doSearch(){
				console.log(this.search_key);
			}
		}
	}
</script>

<style scoped>
	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	} */

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.top{
		width: 100%;
		padding: 20rpx;
		border-radius: 0 0 40rpx 40rpx;
	}
	.search{
		display: flex;
		align-items: center;
		width: 98%;
		background-color: #fff;
		min-height: 100rpx;
		padding: 20rpx;
		margin: 60rpx auto 20rpx auto;
		border-radius: 20rpx;
	}
</style>
