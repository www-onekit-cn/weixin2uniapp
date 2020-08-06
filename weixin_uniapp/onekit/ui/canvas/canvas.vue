<template>
	<canvas :canvas-id="Id" :disable-scroll="disableScroll" :width="width" :height="height" @touchstart="bindtouchstart"></canvas>
</template>

<script>
	export default {
		props: {
			Id: {
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
			bindtouchstart(e) {
				console.log("bind start",e)
				this.$emit("touchstart",e.details)
			}
		}
	}
</script>

<style>
</style>
