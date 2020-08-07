<template>
	<view>
		<image 
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
		  	        console.log("image load success",e)
		  	        this.$emit('load',e.details)
		  	       }, 
			image_error(e){
			        console.log("image error",e)
			        this.$emit('error',e.details)
			       }, 
			
		  },
	}
</script>

<style>
</style>
