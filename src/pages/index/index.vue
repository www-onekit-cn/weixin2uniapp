<template>
	<view class="content">
		<onekit-view @tap="view_tap">hhh</onekit-view>
	</view>
</template>

<script>
	import OnekitPage from '../weixin2uniapp/OnekitPage'
	export default OnekitPage({
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
			view_tap(){
				console.log('xxxx')
			}
		}
	})
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
