<template>
	<onekit-page>
		<view @click="f1">wang</view>
	</onekit-page>
</template>
<script>
	import OnekitPage from '../../weixin2uniapp/OnekitPage'
	import wx from '../../weixin2uniapp/wx'
	export default OnekitPage({}, {
		data:{a:1},
		onLoad() {
			/*const db = wx.cloud.database()
			// wx.cloud.downloadFile({
			// 	fileID: 'cloud://tcb-m1tywhnkezjbnto55a81e-8a87e2.7463-tcb-m1tywhnkezjbnto55a81e-8a87e2-1304593361/timg.jpg',
			// }).then(console.log).catch(console.error)
			wx.cloud.downloadFile({
				fileID: "cloud://tcb-m1tywhnkezjbnto55a81e-8a87e2./timg.jpg",
				// tempFilePath: '/tmp/test/storage/my-photo.png'
			})
			.then(console.log)
			.catch(console.error)
			this.data.yyyy = "yyyy";
			console.log("xxxxx",this.data)*/
		},
		f1() {
				console.log("xxx")
			}
		
	})
</script>
<style></style>
