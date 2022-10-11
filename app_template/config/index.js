module.exports =  {
	title:'Brightness APP',
	base_url:(process.env.NODE_ENV === 'development'&&process.env.VUE_APP_PLATFORM === 'h5') ? '/api':'https://www.fastmock.site/mock/1e5c7738d5d7c2bf7843460528567611/test/',
}