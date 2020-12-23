<template>
	<view class="content">
		<onekit-image onekit-class="logo" src="/static/logo.png"></onekit-image>
	</view>
</template>

<script>
import wx from "../../../weixin2uniapp/wx"
	export default {
		data() {
			return {
			}
		},
		onLoad() {
		wx.connectSocket({
		  url: 'vast-plateau-30681.herokuapp.com/',
		  success : (res) =>{
			console.log(res)
		  },
		  fail: err => {
			  console.log('fail', err)
		  }
		})

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
