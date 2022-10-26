<template>
	<view class="uni-pa-4 box">
		<com-card leftIcon="eye" leftIconColor="#5ac725" title="访问量" footerLeftText="访问总量" footerRightText="280万">
			<template slot="title"><u-tag text="日" type="success" plain size="mini"></u-tag></template>
			<template slot="body">
				<view>
					
					<u--text class="uni-pb-8" :text="$tools.numberWithCommas(5848)" size="30"></u--text>
					<u-row>
						<u-col span="6">
							<u--text text="日同比 12.5%" suffixIcon="arrow-up-fill" size="12" :iconStyle="{color:'#fa3534',marginLeft:'6px'}" ></u--text>
						</u-col>
						<u-col >
							<u--text text="周同比 12.5%" suffixIcon="arrow-down-fill" size="12" :iconStyle="{color:'#19be6b',marginLeft:'6px'}" ></u--text>
						</u-col>
					</u-row>
				</view>
			</template>
		</com-card>
		<com-card footerLeftText="总销售额" footerRightText="68万">
			<template slot="title">
				<u-col span="1">
					<uni-icons type="vip-filled" color="#dd6161"></uni-icons>
				</u-col>
				<u-col span="10">
					<u--text text="销售额"></u--text>
				</u-col>
				<u-col span="1">
					<u-tag text="月" type="error" plain size="mini"></u-tag>
				</u-col>
			</template>
			<template slot="body">
				<view>
					<u--text class="uni-pb-8" :text="12000" mode="price" size="30"></u--text>
					<u-line-progress :percentage="80" activeColor="#2979ff"></u-line-progress>
				</view>
			</template>
		</com-card>
		<com-card leftIcon="list" leftIconColor="#fcbd71" title="订单量" footerLeftText="转化率" footerRightText="60%">
			<template slot="title"><u-tag text="周" type="warning" plain size="mini"></u-tag></template>
			<template slot="body">
				<view style="height: 400rpx;">
					 <com-echarts ref="echarts" :option="echartsOption" canvasId="echarts"></com-echarts>
				</view>
			</template>
		</com-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				echartsOption:{}
			}
		},
		methods: {
			form(value){
				console.log(value);
			}
		},
		onReady() {
			this.echartsOption =  {
			  xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			  },
			  yAxis: {
				type: 'value'
			  },
			  series: [
				{
				  data: [820, 932, 901, 934, 1290, 1330, 1320],
				  type: 'line',
				  areaStyle: {}
				}
			  ]
			};
		}
	}
</script>

<style scoped>
.box{
	background-color: $u-info;
}
</style>
