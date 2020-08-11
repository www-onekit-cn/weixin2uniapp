<template>
	<cover-view :scroll-top="scrollTop">
		<slot></slot>
	</cover-view>
</template>

<script>
	export default {
		props: {
			scrollTop: {
				type: Number || String,
				default: ''
			}
		},
		methods:{}
	}
</script>

<style>
</style>
