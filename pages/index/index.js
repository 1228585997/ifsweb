//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
	  play1:'../../images/play1.png',
	  play2:'../../images/play2.png',
	  type:true, //类型图片展示
	  playsrc:'https://lifn.oss-cn-shanghai.aliyuncs.com/C400002br9DI3QWtAI%20%281%29.m4a',
   arr:[ 
	  {
		  name:'自我评价',
		  text1:'1.善于与人沟通,有很强的团队合作意识,注重团队合作，具有良好的沟通能力。',
		  text2:'2.对前端有很大的兴趣并有独立自主学习的能力，具备独立分析并解决问题的能力。',
		  text3:'3.关注前端技术领域发展, 积极向上，适应力强，有良好的前端编码能力，责任心强。',
		  itemimg:'../../images/item1.png',
		  
	  },
	  {
		  name:'工作经验',
		  title:'2017.11-2020.1	上海小蚁科技有限公司',
		  titleweb:'Web 前端开发工程师',
		  text1:'1.负责 WEB 端及移动端的前端开发工作，完负责与后台合作共同完成项目对接，参与公司外包项目。',
		  text2:'2.配合产品经理及 UI 设计师，研究并改善用户体验。',
		  text3:'3.利用插件快速布局，提高前端开发效率和性能的提升，使用 Swiper 实现首页的轮播切换， Mint-UI 结合 Ajax 实现数据交互。利用 JS、HTML5+CSS、ES6、Vue 等进行页面的开发工作，相关项目的文档编写。',
		  text4:'4.项目通过 Vue 脚手架 快速搭建开发环境，及VueX 处理各组件间的通讯，Axios 处理请求， ',
		  text5:'5.负责 PC 端及移动端的开发、数据交互和性能优化相关工作，使用 HTML5 新特性，利用 SEO 对代码质量及进度负责。',
		  itemimg:'../../images/item2.png',
		  title2:'2020.2-2021.7	上海润和软件有限公司',
		  titleweb2:' Web 前端开发工程师',
		  text1_1:'1.负责大屏可视化开发，WEB项目的前端工作，解决bug。',
		  text2_2:'2. 负责公司内部的小蚁云开放平台,6周年活动页H5页面嵌套APP小程序等项目的开发工作。',
		  text3_3:'与设计师、产品优化师密切合作，参与并实现产品 UI 与交互方面的设计，确保产品具有良好的用户体验。与架构师、产品经理密切合作，参与并完成rdc项目需求。',
		  text4_4:'4.使用 WebPack 将代码打包，合理使用钩子函数，实现数据的监听、渲染页面、页面节点的实例化功能，配合后端开发人员与 UI 设计师，对功能型页面程序提供与整合。 ',
		   
	  },
	  {
	  		  name:'专业技能',
			   itemimg:'../../images/item3.png',
			   text1:'1.熟悉 W3C 标准，熟练掌握 HTML+CSS 及原生 JS,可以根据设计图快速的进行布局，对前端性能优化有着一定的了解，可以有效解决浏览器的兼容问题。',
			   text2:'2.熟练 HTML5、JavaScript、CSS3、并可快速使用 REM、VW、VH、百分比、等移动端的布局方式。',
			   text3:'3.熟练使用 Vue 全家桶,有着一定的项目经验，并可以熟练的使用其 SPA、组件化和脚手架开发，有良好的编码、沟通协作能力和学习能力。',
			   text4:'4.熟练掌握Jquery及Jquery插件，有良好的命名规范，编码能力。熟练使用 NPM、CNPM 等包管理器及微信小程序的开发。',
			   text5:'5.熟练使用 BootStrap、Element-UI、Vant、Mint-UI、等框架进行快速布局,熟悉 ES6 的语法。',
			   text6:'6.熟练使用Git 进行版本管理，有着一定的协同多人项目开发经验，并可以熟练使用 WebPack 自动化打包工具。',
			   text7:'7.对于前后台交互有着项目经验，熟练使用 AJAX、Axios、等前后台交互技术熟练使用Echarts实现数据可视化。',
			   text8:'8.熟练使运 HBuilderX、VScode、Subime、 Photoshop、等常用前端编程软件。'
	  },
	  {
	  		  name:'兴趣爱好',
			   itemimg:'../../images/item4.png',
			    text1:'1.业余时间会自主钻研前端技术丰富自己的前端技能栈。',
				text2:'2.码代码,喜欢网页特效,与大佬交流技术心得,技术实现方案。',
				text3:'3.说走就走的旅行,旅行可以让我们开拓眼界,一辈子是场修行，短的是旅行，长的是人生。'
	  }
   ],//存放数据
   z_index:0,
   listarr:[
	   '自我评价',
	   '工作经验',
	   '专业技能',
	   '兴趣爱好'
   ],
  },
  //选项卡
  swichNav(ev){
	  //console.log(ev)
	  console.log(ev.target.dataset.index)
	  if (this.data.z_index === ev.target.dataset.index){
	      return false;
	  }else{
	    this.setData({
	      z_index:ev.target.dataset.index,
	    })
	  }
  },
  //请求接口
onLoad(){
	this.playMusic()
 },
 //播放音频
 playMusic(){
	 this.audioCtx = wx.createAudioContext('myAudio')
	 this.audioCtx.seek(30)
	 this.audioCtx.play()
 },
 onReady(){
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
 //拨打电话 
 tel(){
	 const phoneNumber=app.globalData.phoneNumber
	 console.log(phoneNumber);
	 wx.makePhoneCall({
	   phoneNumber //仅为示例，并非真实的电话号码
	 })
 },
 //分享
 share(){
	 wx.showShareImageMenu({
		 path:`/images/share.jpg`
	 })
 },
 onReady(){
   //console.log(this.route)
 }
})
