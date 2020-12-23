<script>
	import OnekitApp from '../weixin2uniapp/OnekitApp'
	import wx from '../weixin2uniapp/wx'
	export default OnekitApp({
		onLaunch: function() {
			console.log('App Launch')
			 const db = wx.cloud.database()
			 console.log(db)
			db.collection('developer').add({
				data: {
					name: 'WangYewei'
				},
				success: res => {
					console.log(res)
				},
				fail: err => {
					console.log(err)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	})
</script>

<style>
	@import '../weixin2uniapp/onekit.css'
</style>
