<script>
	import OnekitApp from '../weixin2uniapp/OnekitApp'
	import weixin2uniapp from '../weixin2uniapp/index'
	import Vue from 'vue'
	Vue.use(weixin2uniapp)
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
	@import '../public/onekit.css'
</style>