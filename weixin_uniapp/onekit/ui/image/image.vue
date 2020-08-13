<template>
	<view>
		<image 
			:class="['onekit-image',class_]"
			:style="style_"
			:id="id_"
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
			class_:{
				type:String,
				default:''
			},
			style_:{
				type:String,
				defaul:''
			},
			id_:{
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
		  	        this.$emit('load',e.details)
		  	       }, 
			image_error(e){
			        this.$emit('error',e.details)
			       }, 
			
		  },
	}
</script>

<style>
</style>
