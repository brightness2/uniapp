<template>
	<view class="home">
		
			<u-collapse>
				<view v-for="(item,index) in list" :key="index">
				<u-collapse-item
				v-if="item.children"
				:title="item.title"
				:name="item.title"
				>
				  <u-cell v-for="(child,idx) in item.children" :key="idx" :icon="child.icon" :title="child.title" :isLink="true" @tap="tap(child)" ></u-cell>
				</u-collapse-item>
				<u-cell v-else  :icon="item.icon" :title="item.title" :isLink="true" @tap="tap(item)" ></u-cell>
				</view>
			</u-collapse>
			
		<!-- <u-cell v-for="(child,idx) in list" :key="idx" :icon="child.icon" :title="child.title" :isLink="true" @tap="tap(child)" ></u-cell> -->
		
		<tabbar :activeindex="0"></tabbar>
	</view>
</template>

<script>
	import Tabbar from '@/components/tabbar/tabbar.vue'

	export default {
		components:{Tabbar},
		data:()=>{
			return {
				list:[
					{
						title:'仪表盘',
						children:[
							{
								icon:'grid',
								title:'分析页',
								name:'Analysis',
							},
							{
								icon:'grid',
								title:'工作台',
								name:'Workbench',
							},
							
						]
					},
					{
						title:'表单页',
						children:[
							{
								icon:'order',
								title:'基础表单',
								name:'BasicForm',
							},
							{
								icon:'order',
								title:'步骤表单',
								name:'StepForm',
							},
							
							
						]
					},
					{
						icon:'edit-pen',
						title:'签名板',
						name:'Board'
					},
					{
						icon:'camera',
						title:'相册',
						name:'Camera'
					},
				]
			}
		},
		methods:{
			tap(item){
				this.$Router.push({name:item.name})
			}
		}
	}
</script>

<style>
</style>
