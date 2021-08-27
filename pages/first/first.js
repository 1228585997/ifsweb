// pages/first/first.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
	go:'../../images/go.png',
	play1:'../../images/play1.png',
	play2:'../../images/play2.png',
	type:true, //类型图片展示
	//音频路径
	playsrc:`https://lfn.oss-cn-shanghai.aliyuncs.com/yk.mp3`
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
		this.audioCtx = wx.createAudioContext('myAudio')
		this.audioCtx.play()
  },
  //音频播放
	cg(){ 
		let audioCtx = wx.createAudioContext('myAudio')
		const {type}=this.data
		 if(type){
			  this.setData({
			  	type:false
			  })
			  audioCtx.pause()
		 }else{
			this.setData({
				type:true
			})
			 audioCtx.play()
		 }
	},
	//返回按钮
	goback(){
		wx.switchTab({
		  url: '/pages/undergo/undergo',
		})
	},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})