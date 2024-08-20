<route lang="json5" type="page">
{
  style: {
    layout: 'default',
    navigationBarTitleText: '404',
  },
}
</route>

<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    404
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log(safeAreaInsets)

onShow(() => {
  uni.hideTabBar()
})
</script>

<style lang="scss" scoped></style>
