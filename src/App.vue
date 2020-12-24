<script>
	import OnekitApp from '../weixin2uniapp/OnekitApp'
	import wx from '../weixin2uniapp/wx'
	export default OnekitApp({
		onLaunch: function () {
			console.log('App Launch')

		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	})
</script>

<style>
	@import '../weixin2uniapp/onekit.css'
</style>