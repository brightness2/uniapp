# 下载方式配置
# 配置
# 关于SCSS
TuniaoUI依赖SCSS，您必须要安装此插件，否则无法正常运行。

如果您的项目是由HBuilder X创建的，相信已经安装scss插件，如果没有，请在HBuilderX菜单的 工具->插件安装中找到"scss/sass编译"插件进行安装， 如不生效，重启HBuilderX即可。
# 关于图片
注意

开源版本中所使用到的图片均做了防盗链，只能在调试中使用，不保证在生产环境中可以使用。

图片均上传到图鸟社区 (opens new window)

# 准备工作
在配置之前，请确保您已经根据安装步骤中（下载安装方式二）的步骤对TuniaoUI进行下载安装，如果没有，请先下载安装。

# 配置步骤
# 1.复制文件到项目的根目录
# 必要文件夹
复制tuniao-ui文件夹
复制store文件夹
# 如果使用了模板页面则需要复制以下文件夹
复制libs文件夹
复制static文件夹
# 2.引入TuniaoUI主JS库
在项目根目录中的main.js中，引入并使用TuniaoUI的JS库，注意这两行配置代码要放在import Vue之后。

// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui'
Vue.use(TuniaoUI)
# 3.引入TuniaoUI提供的vuex
在项目根目录的main.js中引入store

// 引入store
import store from './store'
...
const app = new Vue({
  store,
  ...App
})
在项目根目录中的main.js中，引入并使用TuniaoUI的vuex，注意这两行配置代码要放在import Vue之后。

// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$tn.mixin.js')
Vue.mixin(vuexStore)
# 4.引入TuniaoUI的全局SCSS主题文件
在项目根目录的uni.scss中引入此文件。

@import 'tuniao-ui/theme.scss';
# 5.引入TuniaoUI基础样式和图标文件
注意

在App.vue中style标签首行的位置引入，注意给style标签加入lang="scss"属性

<style lang="scss">
  /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
  @import './tuniao-ui/index.scss';
  @import './tuniao-ui/iconfont.css';
</style>
# 6.配置easycom组件模式
此配置需要在根目录的page.json中进行。

温馨提示

uni-app为了调试性能的原因，修改easycom规则不会实时生效，配置完后，您需要重启HBuilderX或者重新编译项目才能正常使用TuniaoUI的功能。
请确保您的pages.json中只有一个easycom字段，否则请自行合并多个引入规则。
// pages.json
{
  "easycom": {
  	"^tn-(.*)": "@/tuniao-ui/components/tn-$1/tn-$1.vue"
  },
  "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
      // ......
    }
  ]
  // ......
}
# 注意事项
注意

如果是开发微信小程序，请修改manifest.json微信小程序选项中的app-id

