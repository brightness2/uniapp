<template>
  <view class="default-layout">
    <wd-gap bg-color="#FFFFFF" :height="safeAreaInsets.top"></wd-gap>
    <wd-navbar title="标题" left-text="返回" left-arrow>
      <template #right>
        <wd-icon name="search" size="18" />
      </template>
    </wd-navbar>
    <wd-notice-bar
      text="这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息"
      prefix="warn-bold"
      :scrollable="true"
    />
    <slot />
    <wd-tabbar fixed v-model="tabbar" @change="tabbarChange" bordered safeAreaInsetBottom>
      <block v-for="(item, index) in tabbarList" :key="index">
        <wd-tabbar-item
          :title="item.title"
          :is-dot="item.isDot"
          :value="item.value"
          :icon="item.icon"
          :max="item.max"
        ></wd-tabbar-item>
        <wd-icon
          v-if="index == 1 && middleMenu && middleMenu.length > 0"
          name="windows-filled"
          size="22px"
          :style="middleMenuBtnStyle"
          @click="toggleShowMiddleMenu"
        ></wd-icon>
      </block>
    </wd-tabbar>
    <wd-overlay :show="showMiddleMenu" @click="toggleShowMiddleMenu">
      <view class="middlemenu-box">
        <view class="middlemenu-list" @click.stop="">
          <wd-grid clickable>
            <wd-grid-item
              v-for="(menu, idx) in middleMenu"
              :key="idx"
              :icon="menu.icon"
              :text="menu.title"
              :is-dot="menu.isDot"
              :value="menu.value"
              :max="menu.max"
              @itemclick="menuClick(menu)"
            />
          </wd-grid>
        </view>
      </view>
    </wd-overlay>
  </view>
</template>
<script lang="ts" setup>
import { useCommonStore } from '@/store/index'
const commonStore = useCommonStore()

const { safeAreaInsets } = uni.getSystemInfoSync()

type menuItem = {
  title: string
  isDot: boolean
  value: number
  max: number
  icon: string
  url: string
}

const tabbarList: menuItem[] = [
  {
    title: '首页',
    isDot: true,
    value: 0,
    max: 99,
    icon: 'home',
    url: '/pages/index/index',
  },
  {
    title: '任务',
    isDot: false,
    value: 10,
    max: 99,
    icon: 'home',
    url: '/pages/task/index',
  },
  {
    title: '工单',
    isDot: false,
    value: 0,
    max: 99,
    icon: 'home',
    url: '/pages/ticket/index',
  },
  {
    title: '我的',
    isDot: false,
    value: 0,
    max: 99,
    icon: 'home',
    url: '/pages/my/index',
  },
]

const middleMenu: menuItem[] = [
  {
    title: '首页',
    isDot: true,
    value: 0,
    max: 99,
    icon: 'home',
    url: '/',
  },
  {
    title: '关于',
    isDot: true,
    value: 0,
    max: 99,
    icon: 'home',
    url: 'pages/index/about',
  },
]
let tabbar = ref(commonStore.commonData.tabbarIndex)
let showMiddleMenu = ref(false)
let middleMenuBtnStyle = reactive({
  color: '#333',
  transform: 'rotate(0deg)',
  Transition: '.5s',
})
/**************生命周期******************** */
onShow(() => {
  uni.hideTabBar()
})
/************method************ */
const tabbarChange = ({ value }) => {
  let menu = tabbarList[value]
  //更新tabbar激活
  commonStore.commonData.tabbarIndex = value
  menuClick(menu)
}

const menuClick = (menu: menuItem) => {
  if (menu && menu.url) {
    uni.redirectTo({ url: menu.url })
  }
}

const toggleShowMiddleMenu = () => {
  showMiddleMenu.value = !showMiddleMenu.value
  if (showMiddleMenu.value) {
    middleMenuBtnStyle.color = '#0083ff'
    middleMenuBtnStyle.transform = 'rotate(135deg)'
  } else {
    middleMenuBtnStyle.color = '#333'
    middleMenuBtnStyle.transform = 'rotate(0deg)'
  }
}
</script>

<style lang="scss">
.default-layout {
  height: 100vh;
  overflow: auto;
}

.middlemenu-box {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 92%;
  .middlemenu-list {
    background: #fff;
    width: 86%;
    // min-height: 60%;
    max-height: 88%;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 1px 1px 1px #aaa;
    overflow-y: scroll;
  }
}
</style>
