<template>
	<movable-area
	:class="['onekit-movable-area',class_]"
	:style="style_"
	:scale-area="scaleArea">
		<slot></slot>
	</movable-area>
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
