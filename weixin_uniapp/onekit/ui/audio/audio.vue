<template>
		<audio
			:class="['onekit-audio',class_]"
			:style="style_"
			:src="src"
			:id="id_"
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
			src:{
				type:String,
				default: ""
			},
			id_:{
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
		  	        this.$emit('play',e)
		  	       }, 
			audio_error(e){
			        this.$emit('error',e)
			       }, 
			audio_pause(e){
			        this.$emit('pause',e)
			       }, 
			audio_timeupdate(e){
			        this.$emit('timeupdate',e)
			       }, 	 
			audio_ended(e){
			        this.$emit('ended',e)
			       }, 	   
		  },

	}
</script>

<style>
</style>
