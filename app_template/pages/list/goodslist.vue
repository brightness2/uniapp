<template>
	<view>
		<view class="uni-pa-8 bg-white" >
			<view class="uni-mb-4">
				<u--text text="商品列表" size="26" color="#000"></u--text>
			</view>
			<view class="uni-pt-6">
				<u--text margin="20" text="以卡片的形式展现商品或图片信息" type="info" size="14"></u--text>
			</view>
		</view>
		<view class="uni-pa-8">
			<view v-for="(goods,index) in goodslist" :key="index" class="bg-white uni-pa-8 uni-mb-8">
				<view class="image">
					<u--image :src="goods.img" mode="aspectFit"></u--image>					
				</view>
				<view class="uni-pa-4 info">
					<view class="uni-mb-4">
						<u--text :text="goods.title" size="16" align="center"></u--text>
					</view>
					<view class="uni-mb-4">
						<u--text :text="goods.desc" type="info" size="16" align="center"></u--text>
					</view>
					<view class="uni-mb-4">
						<u--text :text="goods.price" size="16" type="error" mode="price" align="center" suffixIcon="元" :iconStyle="{color:'#f56c6c',marginLeft:'10rpx'}"></u--text>
					</view>
				</view>
			</view>
			<uni-load-more :status="loadmoreStatus"></uni-load-more>

		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadmoreStatus:'more',
				goodslist:[
					{
						img:'https://dev-file.iviewui.com/PKCycgm3DWJOca5I2uAEqneuLFQAcKa7/middle',
						title:'Sony 无线立体耳机',
						desc:'WH-JU8000',
						price:54.50,
					},
					{
						img:'https://dev-file.iviewui.com/yxsk0RFxdR0X3S0N7QN33mvwLnkfHEJV/middle',
						title:'Vue实战',
						desc:'Vue.js 作者尤雨溪作序',
						price:69.50,
					},
					{
						img:'https://dev-file.iviewui.com/UTPgv8fkOHXszM8Xxm33C2ABuTw7AlRE/middle',
						title:'Cherry机械键盘背光板',
						desc:'Cherry Max 2.0',
						price:21.53,
					},
					{
						img:'https://dev-file.iviewui.com/KUa7CaC6m7vRtDCfY0SAXlp7dw9OvBrf/middle',
						title:'京东E卡 (100元)',
						desc:'面值 100 元的京东E卡(电子卡)',
						price:32.52,
					},
					{
						img:'https://dev-file.iviewui.com/OYZqqiP1bbwN22Ai2HnwvSagxuSNchdD/middle',
						title:'秒空鼠标3.0 银色',
						desc:'Apple Mouse 2.0',
						price:12.40,
					},
				]
			}
		},
		methods: {
			
		},
		onReachBottom() {
			let that = this
			that.loadmoreStatus = 'loading'
			setTimeout(()=>{
				that.loadmoreStatus = 'nomore'
			},2000)
		}
	}
</script>

<style lang="scss" scoped>
.bg-white{
	background-color: #fff;
}
.image{
	width: 80%;
	display: flex;
	justify-content: center;
	margin: 0 auto;
}

</style>
