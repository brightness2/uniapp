<template>
	<view>
		<h1>test</h1>
		<view class="uni-button" @tap="toAdmin">跳转admin</view>
	</view>
</template>

<script>
	
	import http from '@/utils/luchRequest.js'
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
			http.get('uniapp.php').then(res=>{
				console.log('test',res)
			})
		},
		methods: {
			toAdmin(){
				this.$Router.push({
					name:'admin',
					params:{plan:'private'}
				})
			}
		}
	}
</script>

<style>

</style>
