<template>
	<view>
		<text :class="['onekit-text',onekitClass]" :style="onekitStyle" :id="id_" :selectable="selectable" :space="space" :decode="decode">
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
			id_:{
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
