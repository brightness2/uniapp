# uniapp base

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
## 封装了uni.request
utils/request.js

