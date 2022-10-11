<template>
	<view>
		<!-- <view class="uni-button" @tap="toNotFind">跳转404</view> -->
		<component :is="comp"></component>
		<com-tabbar @swichTab="switchTabHandle"></com-tabbar>
	</view>
</template>

<script>
	// 通过动态组件实现自定义tabbar
	import Home from '../home/home.vue'
	import Camera from '../camera/camera.vue'
	import Chat from '../chat/chat.vue'
	import User from '../user/user.vue'
	export default {
		components:{Home,Camera,Chat,User},
		data() {
			return {
				comp:'Home',
			}
		},
		methods: {
			toNotFind(){
				this.$Router.push({
					name:'404',
					params:{plan:'private'}
				})
			},
			switchTabHandle(item){
				this.comp = item.name
			}
		},
		onLoad(){
			// console.log(this.$Route.query.user)
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
