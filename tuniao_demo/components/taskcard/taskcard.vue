<template>
	<view class="task-card tn-margin-lg tn-padding-sm">
		<view class="left">
			<text class="icon tn-icon-task-fill"></text>
		</view>
		<view class="right">
			<view class="tn-flex tn-flex-row-between tn-flex-col-center">
				<text class="tn-text-lg tn-text-bold">{{title}}</text>
				<tn-button  backgroundColor="#D8E5FF" fontColor="#3D7EFF">
					<text>详情</text>
					<text class="tn-icon-right-arrow"></text>
				</tn-button>
			</view>
			
			<view class="description tn-color-gray">
				{{description}}
			</view>
			<view class="tn-flex tn-margin-top-lg">
				<view class="">
					<view class="">
						<text class="tn-icon-calendar tn-color-blue tn-text-xxl"></text>
						<text class="tn-margin-left-sm tn-color-gray">{{date}}</text>
					</view>
				</view>
				<view class="tn-padding-left-xl">
					<tn-circle-progress :width="150" :borderWidth="10" inactiveColor="#9EBEFF" :percent="percent">
					  <view class="tn-color-blue">{{statusText}}</view>
					</tn-circle-progress>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"taskcard",
		props:{
			title:{
				type:String,
				required:true,
			},
			description:{
				type:String,
			},
			date:{
				type:String
			},
			status:{
				type:Number,
				default:0
			},
		},
		data() {
			return {
				
			};
		},
		computed:{
			percent(){
				let value = 0;
				switch(this.status){
					case 1:
						value = 50;
						break;
					case 2:
						value = 100;
						break;
				}
				return value;
			},
			statusText(){
				let value = '待签到';
				switch(this.status){
					case 1:
						value = '待签退';
						break;
					case 2:
						value = '已完成';
						break;
				}
				return value;
			},
		}
		
	}
</script>

<style lang="scss" scoped>
.task-card{
	display: flex;
	min-height: 200rpx;
	background-color: $tn-color-blue-light;
	border-radius: 30rpx;

	.left{
		flex: 1;
		text-align: right;
		.icon{
			font-size: 100rpx;
			color: $tn-color-orange;
		}
		padding-right: 10rpx;
	}
	
	.right{
		flex: 4;
		max-width: 80%;
		.description{
			width: 90%;
			word-wrap: break-word;
		}
	}
}
</style>