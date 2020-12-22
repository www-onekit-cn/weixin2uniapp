<template>
	<view>
		<camera
			:class="['onekit-camera',onekitClass]"
			:style="onekitStyle"
			:id="onekitId"
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
		  	        this.$emit('stop',e)
		  	       }, 
			camera_error(e){
				    this.$emit('error',e)
			}, 
						  
			camera_initdone(e){
					this.$emit('camera_initdone',e)
			}, 
			camera_scancode(e){
					this.$emit('scancode',e)
			},
		  },
	}
</script>

<style>
</style>
