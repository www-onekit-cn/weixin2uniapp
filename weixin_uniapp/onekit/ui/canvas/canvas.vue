<template>
	<canvas :canvas-id="id" :disable-scroll="disableScroll" :width="width" :height="height" @touchstart="touch_start"></canvas>
</template>

<script>
	export default {
		props: {
			id: {
				type: String,
				value: '',
			},
			width: {
				type: String,
				value: '',
			},
			height: {
				type: String,
				value: '',
			},
			disableScroll: {
				type: Boolean,
				value: false
			},
		},
		methods:{
			touch_start(e) {
				console.log("bind start",e)
				this.$emit("touchstart",e.details)
			}
		}
	}
</script>

<style>
</style>
