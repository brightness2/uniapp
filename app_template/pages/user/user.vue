<template>
	<view class="">
		<u-empty
		        mode="data"
		        icon="http://cdn.uviewui.com/uview/empty/data.png"
		>
		</u-empty>
		<tabbar :activeindex="1"></tabbar>
	</view>
</template>

<script>
	import Tabbar from '@/components/tabbar/tabbar.vue'
	export default {
		components:{Tabbar},
		data() {
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	
</style>

