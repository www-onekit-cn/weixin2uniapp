<script>
	import OnekitApp from '../weixin2uniapp/OnekitApp'
	export default OnekitApp({
		onLaunch: function() {
			console.log('App Launch',"xxx")
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
	/*每个页面公共css */
	@import '../weixin2uniapp/onekit.css';
</style>
