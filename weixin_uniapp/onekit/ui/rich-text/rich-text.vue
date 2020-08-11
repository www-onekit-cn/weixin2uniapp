<template>
	<rich-text :nodes="nodes" :space="space">
		<slot></slot>
	</rich-text>
</template>

<script>
	export default {
		props: {
			nodes: {
				type: Array || String,
				default: []
			},
			space: {
				type: String,
				default: ''
			}
		},
		methods: {}
	}
</script>

<style>
</style>
