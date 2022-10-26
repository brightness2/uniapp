# app开发模板

## 夜神模拟器
### 热更新
你本地调试代码是没有热更新显示修改后的代码
你需要找到你HBuilder X安装目录
HBuilderX\plugins\launcher\tools\adbs下的adb.exe

把adb.exe文件复制并且重命名为nox_adb.exe
替换夜神模拟器安装目录Nox\bin下的nox_adb.exe就行了



## UI
使用了uni-ui，安装在uni-modules
使用了uView,安装在了node_modules


## h5跨域配置
manifest.json 文件 
```
"h5": {
	/*跨域配置*/
	"devServer" : {
		"port" : 8080,
		"proxy" : {
			"/api" : {
				"target" : "http://xxxx",
				"changeOrigin" : true,
				"secure" : false,
				"pathRewrite" : {
					"^/api" : ""
				}
			}
		}
	}
}
```

## 网络请求
1、使用 luch-request (基于 Promise  ,支持自定义验证器、文件上传/下载、task 操作、多拦截器)


## 功能
1、错误页面
	404
	
## 路由及权限
1、使用 uni-simple-router (保留了 Vue-router 完全相似的书写风格)
2、使用 uni-read-pages 自动读取pages.json 

## 使用echarts图库
1、使用
```html
<view style="height: 400rpx;">
	 <com-echarts ref="echarts" :option="echartsOption" canvasId="echarts"></com-echarts>
</view>
```

```javascript
export default {
		data() {
			return {
				echartsOption:{}
			}
		},
		methods: {
			form(value){
				console.log(value);
			}
		},
		onReady() {
			this.echartsOption =  {
			  xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			  },
			  yAxis: {
				type: 'value'
			  },
			  series: [
				{
				  data: [820, 932, 901, 934, 1290, 1330, 1320],
				  type: 'line',
				  areaStyle: {}
				}
			  ]
			};
		}
	}

```

2、配置项参数
[echarts配置项文档](https://echarts.apache.org/zh/option.html#title)

2、echarts包过大问题
发布时，如果对文件大小要求更高，可以在 [ECharts 在线定制](https://echarts.apache.org/zh/builder.html)网页下载仅包含必要组件的包，并且选择压缩。

此外，还可考虑使用微信小程序的分包策略和分包异步加载

```json
{
    "path": "pages/tabbar/index",
    "style": {
        "navigationBarTitleText": "首页",
        "usingComponents": {
            "echarts": "/pages/common-a/components/echarts/echarts"
        },
        "componentPlaceholder": {
            "echarts": "view"
        }
    }
}
```
