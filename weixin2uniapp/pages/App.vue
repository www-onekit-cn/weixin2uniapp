<script>
	import app from "../OnekitApp"
	export default {
		onLaunch: function () {
			if (app.onLaunch) {
				return app.onLaunch.call(this);
			}
		},
		onShow: function () {
			if (app.onShow) {
				return app.onShow.call(this);
			}
		},
		onHide: function () {
			if (app.onHide) {
				return app.onHide.call(this);
			}
		},
		onError: function () {
			if (app.onError) {
				return app.onError.call(this);
			}
		},
		onUniNViewMessage: function () {}
	}
</script>
<style>
	@import url("/public/onekit.css");
</style>