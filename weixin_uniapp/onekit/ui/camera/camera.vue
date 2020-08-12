<template>
	<view>
		<camera
			:class="['onekit-camera',class_]"
			:style="style_"
			:mode="mode"
			:resolution="resolution"
			:device-position="devicePosition"
			:flash="flash"
			:frame-size="frameSize"
			@stop="camera_stop"
			@error="camera_error"
			@initdone="camera_initdone"
			@scancode="camera_scancode"
		>
		<slot/>
		</camera>
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
			mode:{
				type:String,
				default: ""
			},
			resolution:{
				type:String,
				default: "scaleToFill"
			},
			devicePosition:{
				type:Boolean,
				default: false
			},
			flash:{
				type:Boolean,
				default: false
			},
			frameSize:{
				type:Boolean,
				default: false
			},
			
		  },
		  methods:{
		  	camera_stop(e){
		  	        console.log("camera_stop",e)
		  	        this.$emit('stop',e.details)
		  	       }, 
			camera_error(e){
				    console.log("camera_error",e)
				    this.$emit('error',e.details)
			}, 
						  
			camera_initdone(e){
					console.log("camera_initdone",e)
					this.$emit('camera_initdone',e.details)
			}, 
			camera_scancode(e){
					console.log("camera_scancode",e)
					this.$emit('scancode',e.details)
			},
		  },
	}
</script>

<style>
</style>
