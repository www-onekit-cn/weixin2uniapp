<template>
	<page id="app">
		<view>wang</view>
	</page>
</template>

<script>
	import OnekitPage from '../../weixin2uniapp/OnekitPage'
	import wx from '../../weixin2uniapp/wx'
	export default OnekitPage({},{
		data() {
			return {
				
			}
		},
		onLoad: res => {
			const db = wx.cloud.database()
		},
		methods: {
			
		}
	})
</script>

<style>

</style>
