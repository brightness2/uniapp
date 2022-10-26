<template>
	<view class="">
		<SignaBoard @getImg="getSignaImage"></SignaBoard>
	</view>
</template>

<script>
	import SignaBoard from '@/components/signaBoard/signaBoard.vue'
	export default {
		components:{SignaBoard},
		data:()=>{
			return {}
		},
		methods:{
			getSignaImage(filePath){
				const that = this
				//上传签名图片
				// that.$request.upload('android.test/upload_file',{
				// 	filePath,
				// 	name: 'file', 
				// }).catch(err=>{
				// 	uni.showToast({
				// 		title:"保存失败",
				// 		icon:"error"
				// 	})
				// })
				
				// #ifndef APP
					alert(filePath)
				// #endif
				
				// #ifdef APP
				// console.log(filePath);
				uni.saveImageToPhotosAlbum({
					filePath,
					success:(path,errMsg)=>{
						console.log(path);
						if(errMsg){
							uni.showToast({
								title:errMsg,
								icon:"error"
							})
							return;
						}
						uni.showToast({
							title:"保存成功",
							icon:"success",
							success() {
								// uni.navigateBack()
							}
						})
					},
					fail(err) {
						console.log(err);
					}
				})
				// #endif
				
				
			},
			
		}
	}
</script>

<style>
</style>
