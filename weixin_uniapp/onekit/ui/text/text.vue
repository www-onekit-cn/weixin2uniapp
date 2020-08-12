<template>
	<view>
		<text :class="['onekit-text',class_]" :style="style_" :selectable="selectable" :space="space" :decode="decode">
			<slot />
		</text>
	</view>
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
			selectable: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: String,
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false
			},
		}
	}
</script>

<style>

</style>
