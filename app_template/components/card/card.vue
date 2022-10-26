<template>
	<view class="card">
		<view class="title uni-pa-8">
			<u-row type="flex" justify="space-between">
				<u-col span="1" v-if="leftIcon"><u-icon  :name="leftIcon" :color="leftIconColor" :size="leftIconSize"></u-icon></u-col>
				<u-col span="10" v-if="title"><u--text :text="title" :size="titleSize" :color="titleColor"></u--text></u-col>
				<u-col span="1" v-if="rightIcon">
					<u-icon  :name="rightIcon" :color="rightIconColor" :size="rightIconSize"></u-icon>
				</u-col>
				<slot name="title"></slot>
			</u-row>
		</view>
		<view class="body uni-pa-8">
			<slot name="body"></slot>
		</view>
		<view class="footer uni-pa-4">
			<view v-if="footerLeftText" class="left">
				{{footerLeftText}}
			</view>
			<slot name="footer"></slot>
			<view v-if="footerRightText" class="right">
				{{footerRightText}}
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"card",
		props:{
			title:{
				type:String,
				default:''
			},
			titleSize:{
				type:Number,
				default:14,
			},
			titleColor:{
				type:String,
				default:''
			},
			leftIcon:{
				type:String,
				default:''
			},
			leftIconColor:{
				type:String,
				default:'#2979ff'
			},
			leftIconSize:{
				type:Number,
				default:'#2979ff',
				default:20
			},
			rightIcon:{
				type:String,
				default:''
			},
			rightIconColor:{
				type:String,
				default:'#2979ff'
			},
			rightIconSize:{
				type:Number,
				default:'#2979ff',
				default:20
			},
			footerLeftText:{
				type:String,
				default:'',
			},
			footerRightText:{
				type:String,
				default:'',
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.card{
		width: 100%;
		background-color: #fff;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		.title{
			height: 40rpx;
			border-bottom: 1px solid $u-info-disabled;
		}
		
		.body{
			border-bottom: 1px solid $u-info-disabled;
		}
		.footer{
			display: flex;
			justify-content: space-between;
		}
	}
</style>
