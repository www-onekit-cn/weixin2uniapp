<template>
	<view>
		<view class="page-head">
			<view class="page-head-title">
				{{title}}
			</view>
			<view class="page-head-line"></view>
			<view v-if="desc" class="page-head-desc">
				{{desc}}
			</view>
		</view>
	</view>
</template>
<script>
	const PAGE_JSON = {
		"component": true,
		"usingComponents": {}
	}
	import OnekitComponent from '../../weixin2uniapp/OnekitComponent';
	global = {};
	export default OnekitComponent({},{
		data: {
			title: null,
			desc: null
		},
		properties: {
			DATA: Object
		},
		attached: function() {
			if (this.DATA) {
				var data
				if (typeof(this.DATA) === "string") {
					data = JSON.parse('{' + this.DATA + '}')
				} else {
					data = this.DATA
				}
				this.setData(data)
			}
		}
	})
</script>
<style>

</style>
