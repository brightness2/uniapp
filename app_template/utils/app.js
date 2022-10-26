const App = {
	saveImgFile(base64){
		const bitmap = new plus.nativeObj.Bitmap('saveImgFile');
		
		bitmap.loadBase64Data(base64,function(){
				const url = "_doc/" + new Date().getTime() + ".png";
				
				bitmap.save(url,{overwrite:true},
					(i)=>{
						uni.saveImageToPhotosAlbum({
							filePath:url,
							success:()=>{
								uni.showToast({
									title:"图片保存成功",
									icon:"success"
								})
							}
						})
					},
					(err)=>{
						uni.showToast({
							title:"图片保存失败",
							icon:"error"
						})
						bitmap.clear()
					}
				)
			},
			function(err){
				uni.showToast({
					title:"图片保存失败",
					icon:"error"
				})
				bitmap.clear()
			}
		)
	}
	
}
