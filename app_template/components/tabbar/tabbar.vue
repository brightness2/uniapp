<template>
	<view class="tabbar">
		<u-tabbar
			:value="activeindex"
			:fixed="true"
			:placeholder="true"
			:safeAreaInsetBottom="true"
		>
			<u-tabbar-item v-for="(item,index) in list" :text="item.name" :icon="item.icon" @click="tap(item)"></u-tabbar-item>
			
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		props:{
			activeindex:{
				default:0,
			}
		},
		data:()=>{
			return {
				list:[
					{
						icon:'home',
						name:'Home',
					},
					// {
					// 	icon:'chat',
					// 	name:'Chat'
					// },
					// {
					// 	icon:'camera',
					// 	name:'Camera'
					// },
					{
						icon:'account',
						name:'User'
					}
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

<style lang="scss" scoped>

</style>
