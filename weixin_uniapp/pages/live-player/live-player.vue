<template>
	<!-- 
	<view class="container">
	  <view class="page-body">
	    <view class="page-section">
	      <live-player id="player" :src="videoSrc" mode="RTC" autoplay @statechange="handleLivePlayerStateChange" @error="handleLivePlayerError"></live-player>
	    </view>
	    <view class="page-section">
	      <view class="page-url">视频地址 (支持flv, rtmp):</view>
	      <input class="input" name="input" placeholder="视频播放链接" :value="videoSrc" @input="handleVideoSrcInput" />
	      <button type="primary" @tap="handleScanQRCode">
	        扫码
	      </button>
	    </view>
	    <view class="page-section">
	      <button @tap="handlePlay" class="page-body-button" type="primary">播放</button>
	      <button @tap="handlePause" class="page-body-button" type="primary">暂停</button>
	      <button @tap="handleStop" class="page-body-button" type="primary">停止</button>
	      <button @tap="handleResume" class="page-body-button" type="primary">恢复</button>
	      <button @tap="handleMute" class="page-body-button" type="primary">静音</button>
	    </view>
	  </view>
	</view> -->

</template>

<script>
	// import OnekitPage from "../../onekit/OnekitPage.js";
	// Page({
	//   onShareAppMessage() {
	//     return {
	//       title: 'live-player',
	//       path: 'page/component/pages/live-player/live-player'
	//     }
	//   },
	//   data: {
	//     videoSrc: ""
	//   },
	//   onReady(res) {
	//     this.ctx = wx.createLivePlayerContext('player')
	//   },
	//   handleScanQRCode() {
	//     wx.scanCode({
	//       complete: (res) => {
	//         const { result } = res;
	//         this.setData({
	//           videoSrc: result
	//         })
	//       },
	//     })
	//   },
	//   handleLivePlayerStateChange(e) {
	//     console.log('live-player code:', e.detail.code)
	//   },
	//   handleLivePlayerError(e) {
	//     console.error('live-player error:', e.detail.errMsg)
	//   },
	//   handlePlay() {
	//     this.ctx.play({
	//       success: res => {
	//         console.log('play success')
	//       },
	//       fail: res => {
	//         console.log('play fail')
	//       }
	//     })
	//   },
	//   handlePause() {
	//     this.ctx.pause({
	//       success: res => {
	//         console.log('pause success')
	//       },
	//       fail: res => {
	//         console.log('pause fail')
	//       }
	//     })
	//   },
	//   handleStop() {
	//     this.ctx.stop({
	//       success: res => {
	//         console.log('stop success')
	//       },
	//       fail: res => {
	//         console.log('stop fail')
	//       }
	//     })
	//   },
	//   handleResume() {
	//     this.ctx.resume({
	//       success: res => {
	//         console.log('resume success')
	//       },
	//       fail: res => {
	//         console.log('resume fail')
	//       }
	//     })
	//   },
	//   handleMute() {
	//     this.ctx.mute({
	//       success: res => {
	//         console.log('mute success')
	//       },
	//       fail: res => {
	//         console.log('mute fail')
	//       }
	//     })
	//   },
	//   handleVideoSrcInput(e) {
	//     this.setData({
	//       videoSrc: e.detail.value
	//     })
	//   }
	// })


</script>

<style>
	/* live-player {
	  display: flex;
	  width: 100%;
	  height: 325px;
	}
	
	.page-body-button {
	  margin-bottom: 15px;
	}
	
	.page-url {
	  margin: 0 auto 15px;
	  width: 90%;
	
	}
	 */
	/* input {
	  width: 90%;
	  margin: 0 auto 15px;
	} */
</style>
