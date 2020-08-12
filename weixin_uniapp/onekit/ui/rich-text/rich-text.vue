<template>
	<rich-text
	:class="['onekit-view',class_]"
	:style="style_"
	:nodes="nodes"
	:space="space">
		<slot></slot>
	</rich-text>
</template>

<script>
	export default {
		props: {
			class_:{
				type:String,
				default:''
			},
			style_:{
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
