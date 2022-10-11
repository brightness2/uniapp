# app开发模板

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