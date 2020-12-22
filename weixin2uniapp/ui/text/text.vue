<template>
	<view>
		<text :class="['onekit-text',onekitClass]" :style="onekitStyle" :id="onekitId" :selectable="selectable" :space="space" :decode="decode">
			<slot />
		</text>
	</view>
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
			onekitId:{
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
