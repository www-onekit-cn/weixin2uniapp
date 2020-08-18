<template>
	<movable-area
	:class="['onekit-movable-area',onekitClass]"
	:style="onekitStyle"
	:scale-area="scaleArea">
		<slot></slot>
	</movable-area>
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
