<template>
	<view class="card">
		<view class="title uni-pa-8">
			<u-row type="flex" justify="space-between">
				<u-col span="1" v-if="leftIcon"><u-icon  :name="leftIcon" :color="leftIconColor" :size="leftIconSize"></u-icon></u-col>
				<u-col justify="flex-start" span="9" v-if="title"><u--text :text="title" :size="titleSize" :color="titleColor"></u--text></u-col>
				<u-col span="1" v-if="rightIcon">
					<u-icon  :name="rightIcon" :color="rightIconColor" :size="rightIconSize"></u-icon>
				</u-col>
				<slot name="title"></slot>
			</u-row>
		</view>
		<view v-if="$slots.body" class="body uni-pa-8">
			<slot name="body"></slot>
		</view>
		<view v-if="footerLeftText||footerRightText||$slots.footer" class="footer uni-pa-4">
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
		}
		
		.body{
			border-top: 1px solid $u-info-disabled;
		}
		.footer{
			border-top: 1px solid $u-info-disabled;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
