<template>
	<view class="home">
		  <u-swiper :list="list1" ></u-swiper>
	</view>
</template>

<script>
	export default {
		data:()=>{
			return {
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
			}
		}
	}
</script>

<style>
</style>
