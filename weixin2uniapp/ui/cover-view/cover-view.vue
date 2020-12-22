<template>
	<cover-view
	:class="['onekit-cover-view',onekitClass]"
	:style="onekitStyle"
	:id="onekitId"
	:scroll-top="scrollTop">
		<slot></slot>
	</cover-view>
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
			scrollTop: {
				type:String||Number,
				default: ''
			}
		},
		methods:{
		}
	}
</script>

<style>
</style>
