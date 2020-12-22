<template>
	<view
	id="onekitId"
	:type="type"
	:size="size"
	:color="color"
	>
	</view>
</template>

<script>
	export default {
		props: {
			onekitId:{
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: ''
			},
			size: {
				type: Number || String,
				default: 23
			},
			color: {
				type: String,
				default: ''
			},
		},
		methods: {}
	}
</script>

<style>
</style>
