<template>
	<cover-view
	:class="['onekit-cover-view',class_]"
	:style="style_"
	:scroll-top="scrollTop">
		<slot></slot>
	</cover-view>
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
			scrollTop: {
				type:String||Number,
				default: ''
			}
		},
		methods:{}
	}
</script>

<style>
</style>
