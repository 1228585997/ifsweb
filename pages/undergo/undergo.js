// pages/undergo/undergo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		autoplay: false, //是否自动播放
		duration: 500, //延迟
		indicatorDots: true, //小点
		interval: 3000, //间隔时间
		duration: 3000, //滑动时间
		color: 'red',
		arr: [
			'/images/1.png',
			'/images/2.png',
			'/images/3.png'
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	//轮播图点击
	tabGo(ev) {
		let index = ev.currentTarget.dataset.index
		switch (index) {
			case 0:
				wx.navigateTo({
					url: `/pages/first/first`
				})
				break;
			case 1:
				console.log('嗲')
				break;
			case 2:
				console.log('第三')
				break;
			default:
				break
		}
		console.log(ev.currentTarget.dataset.index);
	},
	onLoad: function(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
