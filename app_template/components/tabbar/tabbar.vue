<template>
	<view class="tabbar">
		<view class="list">
			<view v-for="(item,index) in list" :class="index==activeindex?'item active':'item'" @tap="active(index)">
				<uni-icons class="icon" :type="item.icon" size="20"></uni-icons>
				<view class="text">{{item.name}}</view>
			</view>
			<view class="indicator"></view>
		</view>
	</view>
</template>

<script>
	export default {
		
		data:()=>{
			return {
				activeindex:0,
				list:[
					{
						icon:'home',
						name:'Home',
					},
					{
						icon:'chat',
						name:'Chat'
					},
					{
						icon:'camera',
						name:'Camera'
					},
					{
						icon:'person',
						name:'User'
					}
				]
			}
		},
		methods:{
			active(index){
				this.activeindex = index
				this.$emit('swichTab',this.list[index])
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color:#fff;
	$activeTextColor:#fff;
	$activeIconColor:#fff;
	$bgcolor:#f5f5f5;
	$indicatorColor:$uni-primary;
	$tabbarColor:$uni-primary;
	.tabbar{
		width: 100%;
		position: fixed;
		bottom: 0;
	}
	.tabbar .list {
	    width: 100%;
	    height: 80rpx;
	    background: $tabbarColor;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    /* border-radius: 10rpx; */
	    position: relative;
	}
	
	.item {
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    flex-direction: column;
	    width: 150rpx;
	}
	
	.icon {
	    position: absolute;
	    /* font-size: 1.7em; */
	    color: $color !important;
	    font-weight: bold;
	    transition: 0.5s;
	}
	
	.text {
	    transform: translateY(20px);
	    font-size: 0.75em;
	    font-weight: bold;
	    transition: 0.5s;
	    opacity: 0;
	}
	
	.item.active .icon {
	    transform: translateY(-50rpx);
	    z-index: 1;
		color: $activeIconColor !important;
	}
	
	.item.active .text {
	    opacity: 1;
	    transform: translateY(12rpx);
		color:$activeTextColor ;
	}
	.indicator{
	    position: absolute;
	    width: 80rpx;
	    height: 80rpx;
	    background: $indicatorColor;
	    left: 108rpx;
	    top: -75%;
	    border-radius: 50%;
	    border: 4px solid $bgcolor;
	    transition: 0.5s;
	}
	//#ifdef APP-PLUS
	.indicator{
		left: 110rpx;
	}
	//#endif
	
	.indicator::before{
	    content: '';
	    position: absolute;
	    top: 50%;
	    left: -22rpx;
	    width: 23rpx;
	    height: 23rpx;
	    background: transparent;
	    border-top-right-radius: 20rpx;
	    box-shadow: 0 0rpx 0 0 $bgcolor;
	}
	
	.indicator::after{
	    content: '';
	    position: absolute;
	    top: 50%;
	    right: -22rpx;
	    width: 23rpx;
	    height: 23rpx;
	    background: transparent;
	    border-top-left-radius: 20rpx;
	    box-shadow: 0 0rpx 0 0 $bgcolor;
	}
	
	.item:nth-child(1).active ~ .indicator{
	    transform: translateX(calc(150rpx * 0));
	}
	
	.item:nth-child(2).active ~ .indicator{
	    transform: translateX(calc(150rpx * 1));
	}
	
	.item:nth-child(3).active ~ .indicator{
	    transform: translateX(calc(150rpx * 2));
	}
	
	.item:nth-child(4).active ~ .indicator{
	    transform: translateX(calc(150rpx * 3));
	}
</style>
