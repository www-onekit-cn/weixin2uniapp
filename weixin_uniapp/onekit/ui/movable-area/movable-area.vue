<template>
	<movable-area :scale-area="scaleArea">
		<slot></slot>
	</movable-area>
</template>

<script>
	export default {
		props: {
			scaleArea: {
				type: Boolean,
				default: false
			}
		},
		methods:{}
	}
</script>

<style>
</style>
