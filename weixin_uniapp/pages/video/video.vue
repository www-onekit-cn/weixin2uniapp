<template>
   
   <view class="container">
   
     <view class="page-body">
       <view class="page-section tc">
         <video 
           id="myVideo" 
           src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4" 
           
           :danmu-list="danmuList" 
           enable-danmu 
           danmu-btn 
           show-casting-button
           show-screen-lock-button
           show-center-play-btn
           show-play-btn 
           controls
           picture-in-picture-mode="['push', 'pop']"
           @enterpictureinpicture='bindVideoEnterPictureInPicture'
           @leavepictureinpicture='bindVideoLeavePictureInPicture'
           enable-auto-rotation="enableAutoRotation"
         ></video>
         <view class="auto-rotate-container">
           <view>开启自动旋转</view>
           <view>
             <switch model:checked="enableAutoRotation" @change="handleSwitchChange" />
           </view>
         </view>
         <view class="weui-cells">
           <view class="weui-cell weui-cell_input">
             <view class="weui-cell__hd">
               <view class="weui-label">弹幕内容</view>
             </view>
             <view class="weui-cell__bd">
               <input @dblur="bindInputBlur" class="weui-input" type="text" placeholder="在此处输入弹幕内容" />
             </view>
           </view>
         </view>
         <view class="btn-area">
           <button @tap="bindSendDanmu" class="page-body-button" type="primary" form-type="submit">发送弹幕</button>
         </view>
         <view class="btn-area">
           <navigator url="picture-in-picture" hover-class="other-navigator-hover">
             <button type="primary" class="page-body-button" @tap="bindPlayVideo">小窗模式</button>
           </navigator>
         </view>
         
       </view>
     </view>
   </view>
</template>
<script>
	import OnekitPage from "../../onekit/OnekitPage.js";
	function getRandomColor() {
	  const rgb = []
	  for (let i = 0; i < 3; ++i) {
	    let color = Math.floor(Math.random() * 256).toString(16)
	    color = color.length === 1 ? '0' + color : color
	    rgb.push(color)
	  }
	  return '#' + rgb.join('')
	}
	
	export default({
	  onShareAppMessage() {
	    return {
	      title: 'video',
	      path: 'page/component/pages/video/video'
	    }
	  },
	
	  onReady() {
	    this.videoContext = wx.createVideoContext('myVideo')
	  },
	
	  onHide() {
	
	  },
	
	  inputValue: '',
	  data() {
		  return{
				enableAutoRotation: true,
				src: '',
				danmuList:
				[{
				  text: '第 1s 出现的弹幕',
				  color: '#ff0000',
				  time: 1
				}, {
				  text: '第 3s 出现的弹幕',
				  color: '#ff00ff',
				  time: 3
				}],
			}
	  },
	
	  bindInputBlur(e) {
	    this.inputValue = e.detail.value
	  },
	
	  bindButtonTap() {
	    const that = this
	    wx.chooseVideo({
	      sourceType: ['album', 'camera'],
	      maxDuration: 60,
	      camera: ['front', 'back'],
	      success(res) {
	        that.setData({
	          src: res.tempFilePath
	        })
	      }
	    })
	  },
	
	  bindVideoEnterPictureInPicture() {
	    console.log('进入小窗模式')
	  },
	
	  bindVideoLeavePictureInPicture() {
	    console.log('退出小窗模式')
	  },
	
	  bindPlayVideo() {
	    this.videoContext.play()
	  },
	  bindSendDanmu() {
	    this.videoContext.sendDanmu({
	      text: this.inputValue,
	      color: getRandomColor()
	    })
	  },
	
	  handleSwitchChange(e) {
	    this.setData({
	      enableAutoRotation: e.detail.value
	    })
	  }
	})

</script>

<style>
	@import "../common/lib/weui.wxss";
	video {
	  width: 345px;
	}
	
	.weui-cells{
	  margin: 20px 15px 0;
	  text-align: left;
	}
	.weui-label{
	  width: 5em;
	}
	.auto-rotate-container {
	  margin: 20px 20px 0;
	  display: flex;
	  justify-content: space-between;
	}
	
	.video-container {
	  margin: 11px 3px;
	  display: flex;
	  justify-content: center;
	}
</style>
