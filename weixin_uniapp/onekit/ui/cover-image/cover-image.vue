<template>
	<cover-image
	:class="['onekit-cover-image',onekitClass]"
	:style="onekitStyle"
	:src="src" @load="coverImage_load" @error="coverImage_error">
		<slot></slot>
	</cover-image>
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
			src: {
				type: String,
				default: ''
			}
		},
		methods: {
			coverImage_load: function(e) {
				this.$emit('load', {})
			},
			coverImage_error: function(e) {
				this.$emit('error', {})
			}
		}
	}
</script>

<style>
</style>
