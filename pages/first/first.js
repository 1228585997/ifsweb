// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	go:'../../images/go.png',
	play1:'../../images/play1.png',
	play2:'../../images/play2.png',
	type:true,
	playsrc:'https://isure.stream.qqmusic.qq.com/C400000Uu4J92SUUaN.m4a?guid=1688505292&vkey=9569AB63C5D603D37F2057F0E0999DB13C57E55DD02AF8D7133F8A89C94A5504855D609FCE4E3183A99E222D39EDF15F3BC8DF07EB97F5D6&uin=7181&fromtag=66'
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