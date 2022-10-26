<template>
	<view class="chat">
		<u-empty
		        mode="permission"
		        icon="http://cdn.uviewui.com/uview/empty/permission.png"
		>
		</u-empty>

		<tabbar :activeindex="1"></tabbar>
	</view>
</template>

<script>
	import Tabbar from '@/components/tabbar/tabbar.vue'
	export default {
		components:{Tabbar},
		data:()=>{
			return {
				
			}
		}
	}
</script>

<style>
</style>
