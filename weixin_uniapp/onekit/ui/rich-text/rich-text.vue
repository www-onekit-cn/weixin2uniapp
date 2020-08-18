<template>
	<rich-text
	:class="['onekit-view',onekitClass]"
	:style="onekitStyle"
	:nodes="nodes"
	:space="space">
		<slot></slot>
	</rich-text>
</template>

<script>
	export default {
		props: {
			onekitClass:{
				type:String,
				default:''
			},
			onekitStyle:{
				type:String,
				defaul:''
			},
			nodes: {
				type:String||Array,
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
