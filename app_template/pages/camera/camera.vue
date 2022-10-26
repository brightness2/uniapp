<template>
  <view class="u-page">
	
	<uni-section  title="只选择图片" type="line">
		<u-upload
			:fileList="fileList1"
			@afterRead="afterRead"
			@delete="deletePic"
			name="1"
			multiple
			:maxCount="10"
		></u-upload>
	</uni-section>
	<view class="u-demo-block__content">
	    <u-row
	            justify="center"
	            gutter="10"
				customStyle="padding-top:10px"
	    >
	        <u-col span="3">
	           <u-button @click="upload" class="" type="primary" :plain="true" icon="arrow-upward" text="上传" size="small"></u-button>
	        </u-col>
	        <u-col span="3">
	           <u-button @click="clearPics" type="error" :plain="true" icon="trash" text="清空" size="small" ></u-button>
	        </u-col>
	        
	    </u-row>
	</view>
	

  </view>
</template>

<script>
    export default {
        data() {
            return {
                fileList1: [
                    // 'https://cdn.uviewui.com/uview/album/1.jpg',
                    // 'https://cdn.uviewui.com/uview/album/2.jpg',
                    // 'https://cdn.uviewui.com/uview/album/3.jpg',
                    // 'https://cdn.uviewui.com/uview/album/4.jpg',
                    // 'https://cdn.uviewui.com/uview/album/5.jpg',
                    // 'https://cdn.uviewui.com/uview/album/6.jpg',
                    // 'https://cdn.uviewui.com/uview/album/7.jpg',
                    // 'https://cdn.uviewui.com/uview/album/8.jpg',
                    // 'https://cdn.uviewui.com/uview/album/9.jpg',
                    // 'https://cdn.uviewui.com/uview/album/10.jpg',
					
                ],
            }
        },
		methods:{
			
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
					})
				})
			},
			
			upload(){
				const that = this
				const list = this.fileList1;
				if(list.length>0){
					uni.showToast({
						title:"上传成功"
					})
					// for (var i = 0; i < list.length; i++) {
					// 	const file = list[i]
					// 	that.$request.upload('android.test/upload_file',{
					// 		filePath:file.url,
					// 		name: 'file', 
					// 	}).then(res=>{
					// 		that.fileList1 = []
					// 	})
					// 	.catch(err=>{
					// 		uni.showToast({
					// 			title:"保存失败",
					// 			icon:"error"
					// 		})
					// 	});
					// }
				}
			},
			clearPics(){
				this.fileList1 = []
			}
		}
    }
</script>

<style lang="scss">
    .album {
        @include flex;
        align-items: flex-start;

        &__avatar {
             background-color: $u-bg-color;
             padding: 5px;
             border-radius: 3px;
         }
    
        &__content {
             margin-left: 10px;
             flex: 1;
         }
    }
</style>

