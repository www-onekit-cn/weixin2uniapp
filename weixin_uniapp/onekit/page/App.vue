<script>
	import app from "../../app.js"
	export default {
		onLaunch: function() {
			return app.onLaunch.apply(this);
		},
		onShow: function() {
			return app.onShow.apply(this);
		},
		onHide: function() {
			return app.onHide.apply(this);
		},
		onError: function() {
			return app.onError.apply(this);
		},
		onUniNViewMessage: function() {
		}
	}
</script>
<style>
@import url("/app.css");
</style>
