<template>
	<cover-image
	:class="['onekit-cover-image',class_]"
	:style="style_"
	:src="src" @load="coverImage_load" @error="coverImage_error">
		<slot></slot>
	</cover-image>
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
