<template>
	<view>
		<h1>test</h1>
	</view>
</template>

<script>
	// import request from '../../utils/request.js'
	import Request from '../../js_sdk/luch-request/luch-request/adapters/index.js'
	export default {
		data() {
			return {
				
			}
		},
		async onLoad() {
			// let res = await this.$request.do({
			// 	url:'uniapp.php'
			// })
			// console.log(res)
			
			const http = new Request();
			http.get('/api/uniapp.php').then(res=>{
				console.log(res)
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
