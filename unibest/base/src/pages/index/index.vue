<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  layout: 'default',
  type: 'home',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <button @click="setPinadata">设置状态数据</button>
    <view>{{ user.userInfo.nickname }}</view>
    <button @click="getPinadata">获取状态数据</button>
    <button @click="topage">路由跳转</button>
    <button @click="test">测试</button>
  </view>
</template>

<script lang="ts" setup>
import { getLocationAPI } from '@/service/lbs'
import { useUserStore } from '@/store/index'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const user = useUserStore()
/*********methods********** */
const setPinadata = () => {
  user.setUserInfo({ nickname: 'test' })
}
const getPinadata = () => {
  console.log(user.userInfo)
}
const topage = () => {
  uni.navigateTo({ url: '/pages/index/about' })
}

const test = () => {
  getLocationAPI('广州富邦中心').then((res) => {
    console.log(res)
  })
}
/******生命周期******* */
// onShow(() => {
//   uni.hideTabBar()
// })
onLoad(() => {})
</script>

<style></style>
