<template>
	<view>
		<audio
			:src="src"
			:id="Id"
			:loop="loop"
			:controls="controls"
			:poster="poster"
			:name="name"
			:author="author"
			@play="audio_play"
			@error="audio_error"
			@pause="audio_pause"
			@timeupdate="audio_timeupdate"
			@ended="audio_ended"
		/>
	</view>
</template>

<script>
	export default {
		
		props: {
			src:{
				type:String,
				default: ""
			},
			Id:{
				type:String,
				default: ""
			},
			loop:{
				type: Boolean,
				default: false
			},
			controls:{
				type: Boolean,
				default: false
			},
			poster:{
				type:String,
				default: ""
			},
			name:{
				type:String,
				default: "未知音频"
			},
			author:{
				type:String,
				default: "未知作者"
			},
		  },
		  methods:{
		  	audio_play(e){
		  	        console.log("play audio success",e)
		  	        this.$emit('play',e.details)
		  	       }, 
			audio_error(e){
			        console.log("play audio error",e)
			        this.$emit('error',e.details)
			       }, 
			audio_pause(e){
			        console.log("play audio pause",e)
			        this.$emit('pause',e.details)
			       }, 
			audio_timeupdate(e){
			        console.log("play audio timeupdate",e)
			        this.$emit('timeupdate',e.details)
			       }, 	 
			audio_ended(e){
			        console.log("play audio ended",e)
			        this.$emit('ended',e.details)
			       }, 	   
		  },

	}
</script>

<style>
</style>
