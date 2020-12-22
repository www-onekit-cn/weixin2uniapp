<template>
	<view>
		<image 
			:class="['onekit-image',onekitClass]"
			:style="onekitStyle"
			:id="onekitId"
			:src="src"
			:mode="mode"
			:lazy-load="lazyLoad"
			:webp="webp"
			:show-menu-by-longpress="showMenuByLongpress"
			@error="image_error"
			@load="image_load"
			
		
		
		/>
	</view>
</template>

<script>
	export default{
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
			src:{
				type:String,
				default: ""
			},
			mode:{
				type:String,
				default: "scaleToFill"
			},
			lazyLoad:{
				type:Boolean,
				default: false
			},
			webp:{
				type:Boolean,
				default: false
			},
			showMenuByLongpress:{
				type:Boolean,
				default: false
			},
			
		  },
		  methods:{
		  	image_load(e){
		  	        this.$emit('load',e)
		  	       }, 
			image_error(e){
			        this.$emit('error',e)
			       }, 
			
		  },
	}
</script>

<style>
</style>
