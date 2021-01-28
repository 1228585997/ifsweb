// app.js

App({
	//小程序启动
	onLaunch(){
		console.log('加载了');
	},
	//小程序展示
	onShow(){
		console.log('onShow'); 
	},
	//小程序关闭
	onHide(){
		 console.log('onHide');
	},
  globalData: {
    userInfo: null,
	phoneNumber:'13707602431'
  }
})
