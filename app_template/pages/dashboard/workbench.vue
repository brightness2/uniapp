<template>
	<view>
		<view class="user-info uni-pa-4">
			<view class="avatar">
				<u--image width="80" height="80" src="http://quasar.admin.sikacode.com/imgs/head_1.png" shape="circle"></u--image>
			</view>
			<view class="name uni-pb-4">
				<u--text text="早安，Brightness，祝你开心每一天!" size="18"></u--text>
				<u--text text="交互设计 |昊朗－某某某事业群－某某平台部－某某技术部－UED" size="12" type="info"></u--text>
			</view>
			<u-row >
				<u-col span="4">
					<u--text text="项目数" type="info" prefixIcon="order" :iconStyle="{color:'#3c9cff'}" align="center" ></u--text>
					<u--text text="56" size="20" align="center" ></u--text>
				</u-col>
				<u-col span="4">
					<u--text text="代办项" type="info" prefixIcon="edit-pen-fill" :iconStyle="{color:'#f9ae3d'}" align="center"></u--text>
					<u--text text="8/24" size="20" align="center"></u--text>
				</u-col>
				<u-col span="4">
					<u--text text="项目访问" type="info" prefixIcon="eye" :iconStyle="{color:'#5ac725'}" align="center"></u--text>
					<u--text :text="$tools.numberWithCommas(2223)" size="20" align="center"></u--text>
				</u-col>
			</u-row>
		</view>
		<view class="uni-pa-8">
			<com-card leftIcon="order" leftIconColor="#3c9cff" title="我的项目" >
				<template slot="title"><u-col span="2"><u--text text="全部项目" type="primary" size="12"></u--text></u-col></template>
				<template slot="body">
					<view v-for="(item,index) in [1,2,3]" :key="index" style="border: 1px solid #a0cfff ;padding: 20rpx;margin-bottom: 30rpx;">
						<u-row justify="start">
							<u-col span="1">
								<u-icon name="list"></u-icon>
							</u-col>
							<u-col>
								<u-text :text="'项目'+(index + 1)"></u-text>
							</u-col>
						</u-row>
						<u--text text="那是一种内在的东西，他们到达不了，也无法触及的" type="info" size="14"></u--text>
						<u-row justify="space-between" class="uni-pt-6">
							<u-col span="9"><u--text text="科学上网组" type="info" size="12"></u--text></u-col>
							<u-col span="2"><u--text text="3天前" type="info" size="12"></u--text></u-col>
						</u-row>
					</view>
				</template>
			</com-card>
		</view>
		<view class="uni-pa-8">
			<com-card leftIcon="order" leftIconColor="#f9ae3d" title="代办事项" >
				<template slot="body">
					<view>
						<uni-table ref="table"  border stripe type="selection" emptyText="暂无更多数据">
							<uni-tr>
								<uni-th width="300" align="center">事项</uni-th>
								<uni-th width="50" align="center">处理人</uni-th>
							</uni-tr>
							<uni-tr v-for="(item, index) in tableData" :key="index">
								<uni-td>{{ item.action }}</uni-td>
								<uni-td>
									<view class="name">{{ item.name }}</view>
								</uni-td>
							</uni-tr>
						</uni-table>
					</view>
				</template>
			</com-card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [
					{
					    "action": "增加登录页",
					    "name": "Brightness",
					},
					{
					    "action": "增加首页",
					    "name": "Brightness",
					},
					{
					    "action": "兼容图表扩展",
					    "name": "Brightness",
					},
					{
					    "action": "增加签名组件",
					    "name": "Brightness",
					},
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.user-info{
		background-color: #fff;
	}
</style>
